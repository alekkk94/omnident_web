// Cloudflare Pages Function — handles the contact form (replaces the old form-submission
// integration, which silently discarded submissions on Cloudflare Pages). See
// functions/README.md for the required environment variables.
//
// `PagesFunction` is imported as a type only (not via tsconfig's global `types`) so the
// Workers runtime types don't leak into the rest of the project and collide with the DOM
// lib types the Astro components rely on (both declare an `Element` type, among others).
import type { PagesFunction } from '@cloudflare/workers-types';

interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // 4 MB

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse(400, { ok: false, error: 'validation' });
  }

  const get = (name: string): string => {
    const value = formData.get(name);
    return typeof value === 'string' ? value : '';
  };

  // Honeypot — if filled, silently pretend success and send nothing.
  const botField = get('bot-field').trim();
  if (botField.length > 0) {
    return jsonResponse(200, { ok: true });
  }

  const fullName = get('fullName').trim();
  const phone = get('phone').trim();
  const email = get('email').trim();
  const channel = get('channel').trim();
  const service = get('service').trim();
  const message = get('message').trim();
  const language = get('language').trim() === 'mk' ? 'mk' : 'en';
  const consent = get('consent');

  if (fullName.length < 2) return jsonResponse(400, { ok: false, error: 'validation' });
  if (phone.length < 6) return jsonResponse(400, { ok: false, error: 'validation' });
  if (!consent) return jsonResponse(400, { ok: false, error: 'validation' });
  if (channel === 'email' && !EMAIL_RE.test(email)) {
    return jsonResponse(400, { ok: false, error: 'validation' });
  }

  // Optional attachment.
  let attachment: { filename: string; content: string } | null = null;
  const file = formData.get('attachment');
  if (file instanceof File && file.size > 0) {
    if (!file.type.startsWith('image/')) {
      return jsonResponse(400, { ok: false, error: 'validation' });
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      return jsonResponse(400, { ok: false, error: 'validation' });
    }
    const buffer = await file.arrayBuffer();
    attachment = {
      filename: file.name || 'attachment',
      content: arrayBufferToBase64(buffer),
    };
  }

  const timestamp = new Date().toISOString();

  const subject =
    language === 'mk'
      ? `OMNIDENT — нова порака: ${fullName}`
      : `OMNIDENT — new enquiry: ${fullName}`;

  const textLines = [
    `Channel: ${channel}`,
    `Full name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Message: ${message}`,
    `Language: ${language}`,
    `Submitted: ${timestamp}`,
  ];
  const text = textLines.join('\n');

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const html = `<table>
    <tr><td>Channel</td><td>${escapeHtml(channel)}</td></tr>
    <tr><td>Full name</td><td>${escapeHtml(fullName)}</td></tr>
    <tr><td>Phone</td><td>${escapeHtml(phone)}</td></tr>
    <tr><td>Email</td><td>${escapeHtml(email)}</td></tr>
    <tr><td>Service</td><td>${escapeHtml(service)}</td></tr>
    <tr><td>Message</td><td>${escapeHtml(message)}</td></tr>
    <tr><td>Language</td><td>${escapeHtml(language)}</td></tr>
    <tr><td>Submitted</td><td>${escapeHtml(timestamp)}</td></tr>
  </table>`;

  const payload: Record<string, unknown> = {
    from: env.CONTACT_FROM_EMAIL,
    to: [env.CONTACT_TO_EMAIL],
    subject,
    text,
    html,
  };

  if (channel === 'email' && email) {
    payload.reply_to = email;
  }

  if (attachment) {
    payload.attachments = [attachment];
  }

  let resendResponse: Response;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.error('Resend request failed', err);
    return jsonResponse(502, { ok: false, error: 'send' });
  }

  if (!resendResponse.ok) {
    const body = await resendResponse.text().catch(() => '');
    console.error('Resend send failed', resendResponse.status, body);
    return jsonResponse(502, { ok: false, error: 'send' });
  }

  return jsonResponse(200, { ok: true });
};
