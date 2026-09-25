import type { Locale } from './ui';

// Dental tourism copy. Kept in its own module rather than ui.ts because it is long-form and
// will be the first thing translated into Italian and Greek (WO-11).
//
// Guarantee durations are PLACEHOLDERS — typical market figures, not OMNIDENT's own terms.
// Set `guaranteePlaceholder` to false once the owner confirms the real periods; the amber
// notice on the guarantee page disappears with it.
export const guaranteePlaceholder = true;

export interface GuaranteeItem {
  years: string;
  mk: string;
  en: string;
}

export const guaranteeItems: GuaranteeItem[] = [
  { years: '10', mk: 'Имплант (фиксура)', en: 'Implant fixture' },
  { years: '5', mk: 'Протетска надградба на имплант', en: 'Implant crown and abutment' },
  { years: '5', mk: 'Керамичка коронка и мост', en: 'Ceramic crown and bridge' },
  { years: '3', mk: 'Керамички фасети', en: 'Ceramic veneers' },
  { years: '2', mk: 'Композитна реставрација', en: 'Composite restoration' },
  { years: '1', mk: 'Тотална и парцијална протеза', en: 'Full and partial denture' },
];

export const tourism = {
  mk: {
    eyebrow: 'Дентален туризам',
    headline: 'Лекување во Скопје, планирано околу вашето патување',
    intro:
      'Примаме пациенти од странство — луѓе од дијаспората кои се враќаат дома и пациенти од ЕУ за кои истиот третман е неколкукратно поскап. Работиме со однапред договорен план: знаете колку посети се потребни, колку дена останувате и што е вклучено пред да резервирате лет.',

    howTitle: 'Како тече соработката',
    steps: [
      {
        title: 'Испратете снимка и фотографии',
        body: 'Преку формата за контакт испратете ортопантомограм (ОПГ) ако имате, фотографии и краток опис. Одговараме со прелиминарен план и распон на цена — без обврска и без плаќање.',
      },
      {
        title: 'Договараме термини и престој',
        body: 'Кога планот ќе ви одговара, го усогласуваме со вашите датуми на патување. Посредуваме за сместување и превоз од аеродром — соработуваме со сместувачки капацитети во Скопје и можеме да ги организираме тие услуги за вас.',
      },
      {
        title: 'Прва посета — преглед и работа',
        body: 'Планот се потврдува на самото место по клинички преглед. Она што може да се заврши во првата посета се завршува; она што бара заздравување се закажува за втората.',
      },
      {
        title: 'Пауза за заздравување',
        body: 'Кај имплантите заздравувањето се одвива дома, најчесто три до шест месеци. Во тој период остануваме на располагање и следиме преку фотографии.',
      },
      {
        title: 'Втора посета — завршна работа',
        body: 'Протетската фаза се завршува при втората посета. По неа добивате писмена гаранција и план за одржување.',
      },
    ],

    tripTitle: 'Колку време е потребно',
    tripNote:
      'Ориентациони времиња за најчестите планови. Точниот распоред се утврдува по прегледот.',
    trips: [
      { treatment: 'Естетска работа (белење, фасети)', visits: '1–2 посети', days: '3–5 дена вкупно' },
      { treatment: 'Коронки и мостови', visits: '2 посети', days: '5–7 дена вкупно' },
      { treatment: 'Импланти со протетика', visits: '2 посети', days: '3–5 дена + 3–6 месеци пауза' },
    ],

    logisticsTitle: 'Што организираме',
    logistics: [
      'Превоз од и до аеродромот во Скопје',
      'Сместување — посредуваме со објекти во близина на ординацијата',
      'Распоред на термините усогласен со датумите на летот',
      'Комуникација и следење помеѓу посетите',
    ],
    logisticsNote:
      'Овие услуги ги организираме за вас преку соработници. Трошоците за пат и сместување ги сноси пациентот.',

    languagesTitle: 'Јазици',
    languagesBody:
      'Комуницираме на македонски и англиски, а во тимот имаме и италијански и грчки. Пишете ни на кој било од овие јазици.',

    guaranteeTeaser:
      'Секоја работа доаѓа со писмена гаранција. Прочитајте точно што е покриено, колку долго и што се случува ако проблем се јави откако ќе се вратите дома.',
    guaranteeLink: 'Гаранција и грижа по третманот',
    ctaTitle: 'Испратете барање за прелиминарен план',
    ctaBody:
      'Без обврска. Одговараме со проценка на потребните посети и распон на цената.',
  },

  en: {
    eyebrow: 'Dental tourism',
    headline: 'Treatment in Skopje, planned around your trip',
    intro:
      'We treat patients from abroad — people from the diaspora coming home, and EU patients for whom the same treatment costs several times more. We work to a plan agreed in advance: you know how many visits are needed, how many days you stay and what is included before you book a flight.',

    howTitle: 'How it works',
    steps: [
      {
        title: 'Send an X-ray and photographs',
        body: 'Use the contact form to send a panoramic X-ray (OPG) if you have one, photographs and a short description. We reply with a preliminary plan and a price range — no obligation, no payment.',
      },
      {
        title: 'We agree dates and arrange your stay',
        body: 'Once the plan suits you, we fit it to your travel dates. We arrange accommodation and airport transfers — we work with places to stay in Skopje and can organise those services for you.',
      },
      {
        title: 'First visit — examination and treatment',
        body: 'The plan is confirmed on site after a clinical examination. Whatever can be completed in the first visit is completed; anything requiring healing is scheduled for the second.',
      },
      {
        title: 'Healing period',
        body: 'With implants, healing happens at home, usually three to six months. We stay available throughout and follow your progress from photographs.',
      },
      {
        title: 'Second visit — final work',
        body: 'The prosthetic stage is completed on the second visit. Afterwards you receive a written guarantee and a maintenance plan.',
      },
    ],

    tripTitle: 'How long it takes',
    tripNote: 'Indicative timings for the most common plans. The exact schedule is set after the examination.',
    trips: [
      { treatment: 'Esthetic work (whitening, veneers)', visits: '1–2 visits', days: '3–5 days in total' },
      { treatment: 'Crowns and bridges', visits: '2 visits', days: '5–7 days in total' },
      { treatment: 'Implants with prosthetics', visits: '2 visits', days: '3–5 days + 3–6 months between' },
    ],

    logisticsTitle: 'What we organise',
    logistics: [
      'Transfers to and from Skopje airport',
      'Accommodation — we arrange places to stay near the clinic',
      'Appointment scheduling fitted to your flight dates',
      'Contact and follow-up between visits',
    ],
    logisticsNote:
      'We organise these services for you through people we work with. Travel and accommodation costs are paid by the patient.',

    languagesTitle: 'Languages',
    languagesBody:
      'We work in Macedonian and English, and the team also speaks Italian and Greek. Write to us in any of them.',

    guaranteeTeaser:
      'Every treatment comes with a written guarantee. Read exactly what is covered, for how long, and what happens if a problem appears after you return home.',
    guaranteeLink: 'Guarantee and aftercare',
    ctaTitle: 'Request a preliminary plan',
    ctaBody: 'No obligation. We reply with an estimate of the visits needed and a price range.',
  },
} as const;

export const guarantee = {
  mk: {
    eyebrow: 'Гаранција',
    headline: 'Што покриваме и колку долго',
    intro:
      'Гаранцијата ја добивате во писмена форма по завршениот третман, со наведени ставки и рокови.',
    tableTitle: 'Рокови по вид на работа',
    colItem: 'Работа',
    colYears: 'Гаранција',
    yearsUnit: 'години',
    yearsUnitOne: 'година',

    coveredTitle: 'Што значи „покриено“',
    covered: [
      'Замена или поправка на ставката за која важи гаранцијата',
      'Лабораториските трошоци за замената',
      'Работата во ординација — без дополнителен надомест',
    ],

    remoteTitle: 'Ако сте се вратиле дома',
    remoteBody:
      'Работата ја поправаме или заменуваме бесплатно во нашата ординација во Скопје. Трошоците за пат и престој за таа посета ги сноси пациентот. Јавете ни се веднаш штом забележите проблем — со фотографии, за да процениме дали е итно и дали може да почека до следното патување.',

    conditionsTitle: 'Услови',
    conditions: [
      'Контролен преглед еднаш годишно. За пациенти од странство прифаќаме фотографии и снимка испратени по електронски пат.',
      'Редовна домашна хигиена според дадените упатства.',
      'Ноќна навлака кај дијагностициран бруксизам, ако е препорачана.',
    ],

    voidsTitle: 'Што ја поништува гаранцијата',
    voids: [
      'Механичка повреда — удар, незгода, гризење тврди предмети',
      'Недоаѓање на контролни прегледи',
      'Пушење кај имплантолошки третмани',
      'Занемарена орална хигиена и нелекувани воспаленија на непцата',
      'Бруксизам без препорачаната заштита',
      'Интервенција врз нашата работа од друг стоматолог',
    ],
    footnote:
      'Гаранцијата се однесува на изработката и материјалот. Не покрива природно трошење, промени во коската и непцата со текот на времето, ниту работа изведена на друго место.',
  },

  en: {
    eyebrow: 'Guarantee',
    headline: 'What we cover, and for how long',
    intro:
      'You receive the guarantee in writing once treatment is complete, listing the items covered and their periods.',
    tableTitle: 'Periods by type of work',
    colItem: 'Work',
    colYears: 'Guarantee',
    yearsUnit: 'years',
    yearsUnitOne: 'year',

    coveredTitle: 'What "covered" means',
    covered: [
      'Replacement or repair of the guaranteed item',
      'The laboratory costs of the replacement',
      'The chair time at the clinic — at no additional charge',
    ],

    remoteTitle: 'If you have already returned home',
    remoteBody:
      'We repair or replace the work free of charge at our clinic in Skopje. Travel and accommodation for that visit are paid by the patient. Contact us as soon as you notice a problem, with photographs, so we can judge whether it is urgent or can wait until your next trip.',

    conditionsTitle: 'Conditions',
    conditions: [
      'A check-up once a year. For patients abroad we accept photographs and an X-ray sent electronically.',
      'Regular home hygiene as instructed.',
      'A night guard where bruxism has been diagnosed and one was recommended.',
    ],

    voidsTitle: 'What voids the guarantee',
    voids: [
      'Mechanical injury — impact, accident, biting hard objects',
      'Not attending check-ups',
      'Smoking, in the case of implant treatment',
      'Neglected oral hygiene and untreated gum inflammation',
      'Bruxism without the recommended protection',
      'Work on our treatment carried out by another dentist',
    ],
    footnote:
      'The guarantee covers workmanship and materials. It does not cover natural wear, changes in bone and gum over time, or work carried out elsewhere.',
  },
} as const;

export function getTourism(lang: Locale) {
  return tourism[lang];
}

export function getGuarantee(lang: Locale) {
  return guarantee[lang];
}
