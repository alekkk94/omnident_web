// Service categories for the landing page's Услуги section.
//
// NOTE: "Фацијална естетика" (facial esthetics — botulinum toxin, fillers, PRX-T33, PRP) is
// intentionally omitted. Plan §5.2 flags that the owner must confirm which injectable
// treatments may legally be advertised under MK regulations before this category ships.

export type ServiceCategory = {
  id: string;
  icon: 'general' | 'esthetic' | 'prosthetics' | 'implantology';
  name: string;
  description: string;
  subservices: string[];
};

export const services: Record<'mk' | 'en', ServiceCategory[]> = {
  mk: [
    {
      id: 'opsta-stomatologija',
      icon: 'general',
      name: 'Општа стоматологија',
      description:
        'Темел на здрава насмевка — редовни прегледи, навремена дијагностика и третмани што спречуваат посериозни проблеми. Работиме прецизно и без непотребна нелагодност.',
      subservices: [
        'Преглед и дијагностика',
        'Чистење забен камен и полирање',
        'Пломби (естетски композитни)',
        'Ендодонција — лекување на коренски канали',
        'Екстракции',
        'Превентива и совети за орална хигиена',
      ],
    },
    {
      id: 'estetska-stomatologija',
      icon: 'esthetic',
      name: 'Естетска стоматологија',
      description:
        'Насмевка што одговара на вашето лице и личност. Комбинираме естетски принципи со конзервативни техники за природни, трајни резултати.',
      subservices: [
        'Стоматолошко белење',
        'Фасети / винири (veneers)',
        'Композитни реставрации (bonding)',
        'Smile makeover — целосна трансформација',
        'Естетска корекција на непрецизности во насмевката',
      ],
    },
    {
      id: 'protetika',
      icon: 'prosthetics',
      name: 'Протетика',
      description:
        'Кога забот е изгубен или сериозно оштетен, протетските решенија ја враќаат функцијата и естетиката. Проектираме секоја изработка да изгледа и функционира природно.',
      subservices: [
        'Коронки (керамички / циркониум)',
        'Мостови',
        'Тотални и парцијални протези',
        'Протетски решенија на импланти',
      ],
    },
    {
      id: 'implantologija',
      icon: 'implantology',
      name: 'Имплантологија',
      description:
        'Трајна замена за изгубени заби, со фокус на долгорочно здравје на коската и мекото ткиво. Следиме современи протоколи за минимизирање на губење коска.',
      subservices: [
        'Имплантологија со еден имплант',
        'Имплантологија со повеќе импланти',
        'Коскена аугментација / графт',
        'Планирање на целосна рехабилитација',
      ],
    },
  ],
  en: [
    {
      id: 'opsta-stomatologija',
      icon: 'general',
      name: 'General dentistry',
      description:
        'The foundation of a healthy smile — regular check-ups, timely diagnostics, and treatments that prevent bigger problems down the line. We work precisely and without unnecessary discomfort.',
      subservices: [
        'Examination & diagnostics',
        'Scaling and polishing',
        'Fillings (esthetic composite)',
        'Endodontics — root canal treatment',
        'Extractions',
        'Preventive care & oral hygiene guidance',
      ],
    },
    {
      id: 'estetska-stomatologija',
      icon: 'esthetic',
      name: 'Esthetic dentistry',
      description:
        'A smile that matches your face and personality. We combine esthetic principles with conservative techniques for natural, lasting results.',
      subservices: [
        'Teeth whitening',
        'Veneers',
        'Composite bonding',
        'Smile makeover — full transformation',
        'Esthetic correction of smile irregularities',
      ],
    },
    {
      id: 'protetika',
      icon: 'prosthetics',
      name: 'Prosthetics',
      description:
        'When a tooth is lost or badly damaged, prosthetic solutions restore function and esthetics. We design every prosthetic piece to look and function naturally.',
      subservices: [
        'Crowns (ceramic / zirconia)',
        'Bridges',
        'Full and partial dentures',
        'Implant-supported prosthetics',
      ],
    },
    {
      id: 'implantologija',
      icon: 'implantology',
      name: 'Implantology',
      description:
        'A permanent replacement for missing teeth, with a focus on the long-term health of bone and soft tissue. We follow modern protocols to minimize bone loss.',
      subservices: [
        'Single-implant placement',
        'Multiple-implant placement',
        'Bone augmentation / grafting',
        'Full rehabilitation planning',
      ],
    },
  ],
};
