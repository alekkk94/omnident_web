export const locales = ['mk', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'mk';

export const ui = {
  mk: {
    pages: {
      placeholderNotice:
        'Оваа страница прикажува ПРИМЕРОЦИ. Имињата, биографиите и цените се измислени и служат само за приказ на структурата — не се вистински податоци на OMNIDENT.',
      team: {
        eyebrow: 'Тим',
        headline: 'Луѓето зад вашата насмевка',
        subheading: 'Мал тим, јасни одговорности и континуирано усовршување.',
        educationLabel: 'Образование',
        focusLabel: 'Фокус',
        languagesLabel: 'Јазици',
      },
      services: {
        eyebrow: 'Услуги',
        headline: 'Што работиме',
        subheading: 'Секоја услуга со јасен опис, времетраење и ориентациона цена.',
        priceLabel: 'Цена',
        visitsLabel: 'Посети',
        durationLabel: 'Времетраење',
      },
      prices: {
        eyebrow: 'Цени',
        headline: 'Ориентациони цени',
        subheading:
          'Цените се дадени како распон во евра. Конечниот план и цената се определуваат по преглед.',
        colTreatment: 'Услуга',
        colPrice: 'Распон',
        colVisits: 'Посети',
      },
    },
    notFound: {
      message: 'Страницата не постои или е преместена.',
      back: 'Врати се на почетна',
    },
    meta: {
      title: 'OMNIDENT — Дентална Естетика Скопје',
      description:
        'OMNIDENT е дентален естетски центар во Скопје — општа и естетска стоматологија, протетика и имплантологија. Закажете преглед денес.',
    },
    nav: {
      home: 'Почетна',
      services: 'Услуги',
      about: 'За нас',
      contact: 'Контакт',
      cta: 'Закажи преглед',
      langToggle: 'EN',
      langName: 'Македонски',
    },
    hero: {
      eyebrow: 'Дентална Естетика · Скопје',
      headline: 'Насмевка што зборува за вас',
      subline:
        'Естетска и општа стоматологија во срцето на Скопје — прецизна нега, топла атмосфера и резултати на кои им верувате.',
      ctaPrimary: 'Закажи термин',
      ctaSecondary: 'Нашите услуги',
      scrollHint: 'Скролувај',
      imageAlt: 'Светла и модерна стоматолошка ординација (илустративна фотографија)',
    },
    about: {
      eyebrow: 'За нас',
      headline: 'Грижа со смирен пристап',
      philosophy:
        'Останете смирени и насмевнете се. Во OMNIDENT веруваме дека посетата на стоматолог не треба да предизвикува стрес — затоа градиме секој третман околу вашата удобност, со прецизност поткрепена на модерни протоколи и искрена комуникација.',
      imageAlt: 'Стоматолошки стол во светла ординација со сина тапацерија (илустративна фотографија)',
    },
    services: {
      eyebrow: 'Услуги',
      headline: 'Стоматологија скроена за вас',
      subheading:
        'Секоја услуга е водена од јасен клинички протокол — без изненадувања, без празни ветувања.',
      ctaLabel: 'Закажи преглед',
      closeLabel: 'Затвори',
      expandLabel: 'Дознај повеќе',
    },
    process: {
      eyebrow: 'Вашата посета',
      headline: 'Како тече третманот',
      steps: [
        { title: 'Закажување', description: 'Изберете термин преку формата, телефон или Viber — потврдуваме брзо.' },
        { title: 'Преглед', description: 'Детална дијагностика и разговор за вашите цели, без брзање.' },
        { title: 'Третман', description: 'Јасен план, чекор по чекор, со целосна транспарентност за секој дел.' },
        { title: 'Насмевка', description: 'Резултат во кој уживате долгорочно, со контролни прегледи по потреба.' },
      ],
    },
    story: {
      eyebrow: 'Нашата приказна',
      headline: 'Патот до денес',
      nodes: [
        { title: 'Основање', description: 'OMNIDENT е основан со јасна цел: дентална нега во која пациентите се чувствуваат сигурни и почитувани.' },
        { title: 'Естетска стоматологија', description: 'Проширивме фокус кон естетски третмани — за насмевки кои изгледаат природно и трајно.' },
        { title: 'Имплантологија', description: 'Воведовме современи имплантолошки протоколи за трајни решенија при губење на заби.' },
        { title: 'Континуирано усовршување', description: 'Тимот постојано се едуцира и ги следи најновите протоколи во стоматологијата.' },
        { title: 'Континуирана грижа', description: 'Секој пациент добива план за одржување и повторни контроли по завршениот третман.' },
      ],
    },
    gallery: {
      eyebrow: 'Зид со спомени',
      headline: 'Поглед во нашата ординација',
      subheading: 'Моменти од ординацијата — вистински, неулепшани.',
      placeholderNote: 'Простор за фотографии — чекаме реални слики од ординацијата.',
      imageAlts: [
        'Светла ординација со бело-сина стоматолошка опрема (илустративна фотографија)',
        'Стоматолошки стол во неутрална ординација (илустративна фотографија)',
        'Стоматолошки стол со тиркизна тапацерија покрај розев ѕид (илустративна фотографија)',
        'Чекалница со тиркизни каучеви во светла просторија (илустративна фотографија)',
        'Крупен план на стоматолошка опрема (илустративна фотографија)',
        'Крупен план на стоматолошки инструменти (илустративна фотографија)',
      ],
    },
    contact: {
      eyebrow: 'Контакт',
      headline: 'Закажи термин',
      subheading: 'Јавете се, пишете или поминете — ќе ви одговориме брзо.',
      addressLabel: 'Адреса',
      phoneLabel: 'Телефон',
      hoursLabel: 'Работно време',
      socialLabel: 'Социјални мрежи',
      form: {
        fullName: 'Име и презиме',
        phone: 'Телефон',
        email: 'Е-маил',
        service: 'Услуга',
        serviceDefault: 'Изберете услуга',
        message: 'Порака',
        attachment: 'Прикачи слика (опционо)',
        consent:
          'Се согласувам моите податоци да бидат обработени за целите на оваа контакт-форма.',
        channelLabel: 'Начин на контакт',
        channelEmail: 'Е-маил',
        channelViber: 'Viber',
        submitEmail: 'Испрати порака',
        submitViber: 'Отвори Viber',
        successTitle: 'Пораката е испратена!',
        successBody: 'Ќе ве контактираме наскоро.',
        errorBody: 'Настана грешка. Обидете се повторно или јавете се директно.',
        viberFallback: 'Немате Viber на овој уред? Јавете се на',
      },
    },
    footer: {
      tagline: 'Дентална Естетика · Скопје',
      rights: 'Сите права задржани.',
    },
  },
  en: {
    pages: {
      placeholderNotice:
        'This page shows PLACEHOLDER content. The names, biographies and prices are invented and exist only to show the structure — they are not real OMNIDENT data.',
      team: {
        eyebrow: 'Team',
        headline: 'The people behind your smile',
        subheading: 'A small team, clear responsibilities and continuous training.',
        educationLabel: 'Education',
        focusLabel: 'Focus',
        languagesLabel: 'Languages',
      },
      services: {
        eyebrow: 'Services',
        headline: 'What we do',
        subheading: 'Every service with a clear description, duration and indicative price.',
        priceLabel: 'Price',
        visitsLabel: 'Visits',
        durationLabel: 'Duration',
      },
      prices: {
        eyebrow: 'Prices',
        headline: 'Indicative prices',
        subheading:
          'Prices are given as a range in euro. The final plan and price are set after an examination.',
        colTreatment: 'Service',
        colPrice: 'Range',
        colVisits: 'Visits',
      },
    },
    notFound: {
      message: 'This page does not exist or has moved.',
      back: 'Back to home',
    },
    meta: {
      title: 'OMNIDENT — Dental Esthetic Center Skopje',
      description:
        'OMNIDENT is a dental esthetic center in Skopje — general and esthetic dentistry, prosthetics, and implantology. Book your appointment today.',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      cta: 'Book a check-up',
      langToggle: 'MK',
      langName: 'English',
    },
    hero: {
      eyebrow: 'Dental Esthetics · Skopje',
      headline: 'A smile that speaks for you',
      subline:
        'Esthetic and general dentistry in the heart of Skopje — precise care, a warm atmosphere, and results you can trust.',
      ctaPrimary: 'Book an appointment',
      ctaSecondary: 'Our services',
      scrollHint: 'Scroll',
      imageAlt: 'Bright, modern dental treatment room (illustrative photo)',
    },
    about: {
      eyebrow: 'About us',
      headline: 'Care with a calm approach',
      philosophy:
        "Stay calm and smile. At OMNIDENT we believe a dental visit shouldn't cause stress — that's why we build every treatment around your comfort, backed by precise, modern protocols and honest communication.",
      imageAlt: 'Dental chair in a bright treatment room with blue upholstery (illustrative photo)',
    },
    services: {
      eyebrow: 'Services',
      headline: 'Dentistry tailored to you',
      subheading:
        'Every service follows a clear clinical protocol — no surprises, no empty promises.',
      ctaLabel: 'Book a check-up',
      closeLabel: 'Close',
      expandLabel: 'Learn more',
    },
    process: {
      eyebrow: 'Your visit',
      headline: 'How treatment works',
      steps: [
        { title: 'Booking', description: 'Pick a time via the form, phone, or Viber — we confirm quickly.' },
        { title: 'Examination', description: 'Thorough diagnostics and an unhurried conversation about your goals.' },
        { title: 'Treatment', description: 'A clear, step-by-step plan with full transparency at every stage.' },
        { title: 'Smile', description: "A result you'll enjoy long-term, with follow-ups as needed." },
      ],
    },
    story: {
      eyebrow: 'Our story',
      headline: 'The path to today',
      nodes: [
        { title: 'Founding', description: 'OMNIDENT was founded with a clear purpose: dental care where patients feel safe and respected.' },
        { title: 'Esthetic dentistry', description: 'We expanded our focus toward esthetic treatments — for smiles that look natural and last.' },
        { title: 'Implantology', description: 'We introduced modern implantology protocols for lasting solutions to tooth loss.' },
        { title: 'Continuous improvement', description: 'Our team keeps training and following the latest protocols in dentistry.' },
        { title: 'Continuing care', description: 'Every patient receives a maintenance plan and follow-up checks after treatment is complete.' },
      ],
    },
    gallery: {
      eyebrow: 'Wall of memories',
      headline: 'A look inside our clinic',
      subheading: 'Real moments from the clinic — unfiltered.',
      placeholderNote: 'Photo space — awaiting real clinic photos.',
      imageAlts: [
        'Bright treatment room with white and blue dental equipment (illustrative photo)',
        'Dental chair in a neutral-toned treatment room (illustrative photo)',
        'Dental chair with teal upholstery beside a pink accent wall (illustrative photo)',
        'Waiting area with teal sofas in a bright room (illustrative photo)',
        'Close-up of dental equipment (illustrative photo)',
        'Close-up of dental instruments (illustrative photo)',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      headline: 'Book an appointment',
      subheading: "Call, write, or drop by — we'll get back to you quickly.",
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      hoursLabel: 'Hours',
      socialLabel: 'Social media',
      form: {
        fullName: 'Full name',
        phone: 'Phone',
        email: 'Email',
        service: 'Service',
        serviceDefault: 'Choose a service',
        message: 'Message',
        attachment: 'Attach an image (optional)',
        consent: 'I agree to have my data processed for the purpose of this contact form.',
        channelLabel: 'Contact method',
        channelEmail: 'Email',
        channelViber: 'Viber',
        submitEmail: 'Send message',
        submitViber: 'Open Viber',
        successTitle: 'Message sent!',
        successBody: "We'll contact you shortly.",
        errorBody: 'Something went wrong. Please try again or call us directly.',
        viberFallback: "Don't have Viber on this device? Call",
      },
    },
    footer: {
      tagline: 'Dental Esthetics · Skopje',
      rights: 'All rights reserved.',
    },
  },
} as const;
