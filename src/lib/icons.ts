export type IconName = 'tooth' | 'smile' | 'sparkle' | 'heart' | 'implant' | 'star';

export const icons: Record<IconName, string> = {
  tooth:
    '<path d="M12 3c-2.2 0-3.5 1.1-4.6 1.1-1.3 0-2.4-.8-3.4-.4-1.2.5-1.5 2-1.3 3.6.4 3 1.4 5.3 2.1 8.3.4 1.7.7 3.4 2 3.4 1.5 0 1.4-3.2 2.9-3.2s1.4 3.2 2.9 3.2c1.3 0 1.6-1.7 2-3.4.7-3 1.7-5.3 2.1-8.3.2-1.6-.1-3.1-1.3-3.6-1-.4-2.1.4-3.4.4C15.5 4.1 14.2 3 12 3Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" fill="none"/>',
  smile:
    '<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M8 13.5c1 1.3 2.3 2 4 2s3-.7 4-2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M8.5 9.5h.01M15.5 9.5h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  sparkle:
    '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>',
  heart:
    '<path d="M12 20.5s-7.5-4.6-9.7-9.2C.7 7.8 2.6 4.5 6 4.1c2-.2 3.6.9 6 3.1 2.4-2.2 4-3.3 6-3.1 3.4.4 5.3 3.7 3.7 7.2C19.5 15.9 12 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/>',
  implant:
    '<path d="M12 3v6M9 9h6l-1 3h-4l-1-3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/><path d="M11 12v3.5M13 12v3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M9.5 19c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" fill="none"/>',
  star:
    '<path d="M12 3.5l2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 15.8l-5 2.7 1.2-5.5-4.2-3.8 5.6-.6L12 3.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" fill="none"/>',
};

export const serviceIconMap: Record<'general' | 'esthetic' | 'prosthetics' | 'implantology', IconName> = {
  general: 'tooth',
  esthetic: 'sparkle',
  prosthetics: 'star',
  implantology: 'implant',
};
