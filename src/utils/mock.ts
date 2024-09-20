import GovernmentIcon from "../assets/icons/government.svg?react";
import JudgeIcon from "../assets/icons/judge.svg?react";
import ListIcon from "../assets/icons/list.svg?react";
import MailVoiceIcon from "../assets/icons/mail-voice.svg?react";
import img1 from "../assets/images/img-1.png";
import img2 from "../assets/images/img-2.png";
import news1 from "../assets/images/news1.png";
import news2 from "../assets/images/news2.png";
import CameraIcon from "../assets/icons/elements/camera.svg?react";
import elem2 from "../assets/icons/elements/elem2.svg?react";
import elem3 from "../assets/icons/elements/elem3.svg?react";
import elem4 from "../assets/icons/elements/elem4.svg?react";
import elem5 from "../assets/icons/elements/elem5.svg?react";
import VideoIcon from "../assets/icons/elements/video.svg?react";
import elem7 from "../assets/icons/elements/elem7.svg?react";
import elem8 from "../assets/icons/elements/elem8.svg?react";
import elem9 from "../assets/icons/elements/elem9.svg?react";
import elem10 from "../assets/icons/elements/elem10.svg?react";
import elem11 from "../assets/icons/elements/elem11.svg?react";
import elem12 from "../assets/icons/elements/elem12.svg?react";
import elem13 from "../assets/icons/elements/elem13.svg?react";
import Andijon from "../assets/images/regions/andijon.png"
import Buxoro from "../assets/images/regions/Buxoro.png"
import Samarqand from "../assets/images/regions/Samarqand.png"
import Qashqadaryo from "../assets/images/regions/Qashqadaryo.png"
import Surxondaryo from "../assets/images/regions/Surxondaryo.png"
import Xorazm from "../assets/images/regions/Xorazm.png"
import Jizzax from "../assets/images/regions/Jizzax.png"
import Navoiy from "../assets/images/regions/Navoiy.png"
import Sirdaryo from "../assets/images/regions/Sirdaryo.png"
import Toshkent from "../assets/images/regions/Toshkent.png"
import Toshkent_vil from "../assets/images/regions/Toshkent_vil.png"
import Namangan from "../assets/images/regions/Namangan.png"
import Fargona from "../assets/images/regions/Fargona.png"
import Qoraqalpogiston from "../assets/images/regions/Qoraqalpogiston.png"

import { INew, IGallery, IElement, IRegion } from "./interface";

export const footerLinks = [
  {
    name: "first",
    data: [
      {
        title: "Markaz haqida",
        children: [
          { name: "Biz haqimizda", link: "/about" },
          { name: "Vazifalar funksiyalar", link: "/about" },
          { name: "Rahbariyat", link: "/about" },
          { name: "Markaz tarkibiy tuzilmasi", link: "/about" },
          { name: "Hududiy sektor mutaxassisi", link: "/about" },
          { name: "Xodimlarning odob-axloq qoidalariga amal qilishi", link: "/about" },
          { name: "Bo’sh ish o’rinlari", link: "/about" },
        ],
      },
      {
        title: "Faoliyat",
        children: [
          { name: "Elektron hukumat", link: "/about" },
          { name: "Yoshlar siyosati", link: "/about" },
          { name: "Gender tenglik", link: "/about" },
          { name: "Davlat tili va ma'naviy-ma'rifiy ishlar", link: "/about" },
        ],
      },
      {
        title: "Davlat xizmatlari",
        children: [
          { name: "Davlat xizmatlari reestri", link: "/about" },
          { name: "Interfaol xizmatlar ro'yxati", link: "/about" },
          { name: "Savol va javoblar", link: "/about" },
        ],
      },
    ],
  },
  {
    name: "second",
    data: [
      {
        title: "Hujjatlar",
        children: [
          { name: "O'zbekiston Respublikasi prezidentining farmonlari", link: "/about" },
          { name: "O'zbekiston Respublikasi Qonunlari", link: "/about" },
          { name: "O'zbekiston Respublikasi Vazirlar Mahkamasining qarorlari", link: "/about" },
          {
            name: "O'zbekiston Respublikasi Adliya vazirligidan ro'yxatdan o'tgan Ichki ishlar vazirligi organlariga tegishli me'yoriy-huquqiy hujjatlar",
            link: "/about",
          },
          { name: "Ichki ishlar vazirining buyruq va farmoyishlari", link: "/about" },
          { name: "Xalqaro shartnomalar", link: "/about" },
          { name: "Korrupsiya holatlarini barvaqt aniqlash va ularning oldini olishga doir ichki idoraviy hujjatlar", link: "/about" },
          { name: "O'z kuchini yo'qotgan me'yoriy-huquqiy hujjatlar", link: "/about" },
        ],
      },
      {
        title: "ochiq ma’lumotlar",
        children: [
          { name: "Davlat xaridlari to'g'risida", link: "/about" },
          { name: "Ochiq ma'lumotlar to'plami", link: "/about" },
          { name: "Ochiq budjet ", link: "/about" },
          { name: "Markaz faoliyatiga oid hisobotlar", link: "/about" },
          {
            name: "Davlat organlariga doimiy foydalanish uchun berilgan er maydonlari va boshqa mol-mulklarni davlat-xususiy sheriklik asosida olgan yuridik va jismoniy shaxslar to'g'risidagi ma'lumotlar",
            link: "/about",
          },
          { name: "Tanlov va tenderlar", link: "/about" },
          { name: "Ochiq ma’lumotlar sifatida joylashtirilishi kerak bo‘lgan ijtimoiy ahamiyatga molik ma’lumotlar", link: "/about" },
          { name: "Murojaatlarning umumlashtirilgan natijalari", link: "/about" },
        ],
      },
    ],
  },
  {
    name: "third",
    data: [
      {
        title: "axborot xizmati",
        children: [
          { name: "Markaz yangiliklari", link: "/about" },
          { name: "Press-relizlar", link: "/about" },
          { name: "Matbuot anjumanlari", link: "/about" },
          { name: "Rahbariyatning bayonotlari va nutqlari", link: "/about" },
          { name: "So'rovnomalar", link: "/about" },
          { name: "Axborot xizmati haqida", link: "/about" },
        ],
      },
      {
        title: "Davlat xizmatlari",
        children: [
          { name: "Davlat xizmatlari reestri", link: "/about" },
          { name: "Interfaol xizmatlar ro'yxati", link: "/about" },
          { name: "Savol va javoblar", link: "/about" },
        ],
      },
      {
        title: "bog’lanish",
        children: [
          { name: "Kontaktlar", link: "/about" },
          { name: "Barcha raqami ", link: "/about" },
          { name: "Fuqaro murojaatlari", link: "/about" },
        ],
      },
    ],
  },
];

export const links2 = [
  {
    name: "Yoshlar siyosati",
    active: true,
    path: "/news",
  },
  {
    name: "Gender tenglik",
    active: false,
    path: "/about",
  },
  {
    name: "Davlat tili va ma'naviy-ma'rifiy ishlar",
    active: false,
    path: "/news",
  },
];

export const data: IGallery[] = [
  {},
  {
    color: "#227B9C99",
  },
  {
    color: "#0C3A8D",
  },
  {
    color: "#6683B799",
  },
  {},
  {},

  {
    color: "#0C3A8D",
  },
  {},
  {
    color: "#3D62A4",
  },
  {
    color: "#227B9C",
    content: GovernmentIcon,
  },
  {
    color: "#194593",
  },
  {},

  {},
  {},
  {},
  {
    color: "#19459380",
  },
  {
    color: "#194593",
    content: JudgeIcon,
  },
  {
    color: "#0C3A8D",
  },
];

export const data2: IGallery[] = [
  {},
  {},
  {},
  {
    color: "#19459380",
  },
  {
    color: "#406BAC",
  },
  {},

  { color: "#19459326" },
  { color: "#19459359" },
  { color: "#19459380", content: ListIcon },
  {
    color: "#3F599F",
  },
  {
    img: img1,
  },
  {},

  {
    color: "#19459380",
  },
  { color: "#194593", content: JudgeIcon },
  { img: img2 },
  {
    color: "#6683B799",
  },
  {},
  {
    color: "#227B9C",
  },
  {
    color: "#227B9C99",
  },
  {
    color: "#0C3A8D",
  },
  {
    color: "#6683B733",
  },
  {
    color: "#405095",
  },
  { color: "#893D91", content: MailVoiceIcon },
  {},

  {
    color: "#0C3A8D80",
  },
  {
    color: "#3D62A4",
  },
  { color: "#227B9C", content: GovernmentIcon },
  {
    img: img1,
  },
  {},
  {
    color: "#00308780",
  },
];

export const news: INew[] = [
  {
    date: "04.09.2024",
    description:
      "Xavfsiz shahar markazi mas’ullari tomonidan Andijon viloyati IIB Axborot texnologiyalari va aloqa axborotini himoyalash bo'limi hamda Vaziyatlar markazi...",
    image: news1,
  },
  {
    date: "04.09.2024",
    description: "Aziz yurtdoshlar va qadrli hamkasblar! Barchamizga jonajon O‘zbekistonimiz Mustaqilligining 33 yilligi muborak bo‘lsin!",
    image: news2,
  },
];

export const elements: IElement[] = [
  {
    color: "#002B7AFF",
    icon: CameraIcon,
    text: `Yo'l harakati qoidabuzarliklarini foto-video qayd etish tizimi`,
  },
  {
    color: "#002B7AFF",
    icon: elem2,
    text: `Konstruksiyalarning holati monitoring tizimi`,
  },
  {
    color: "#4D6EABFF",
    icon: elem3,
    text: `Seysmik holatni monitoring tizimi`,
  },
  {
    color: "#8098C3FF",
    icon: elem4,
    text: `Geoaxborot tizimi`,
  },
  {
    color: "#B3C1DBFF",
    icon: elem5,
    text: `Yo'l harakatining boshqarishni avtomatlashtirilgan tizimi`,
  },
  {
    color: "#4B4B8DFF",
    icon: VideoIcon,
    text: `Intellektual videokuzatuv tizimi`,
  },
  {
    color: "#4B4B8DFF",
    icon: elem7,
    text: `Transport oqimining monitoring tizimi`,
  },
  {
    color: "#8787BAFF",
    icon: elem8,
    text: `Ekologik vaziyat monitoring tizimi`,
  },
  {
    color: "#A9A9CEFF",
    icon: elem9,
    text: `112-yagona dispetcherlik xizmati`,
  },
  {
    color: "#208C93FF",
    icon: elem10,
    text: `Favqulodda vaziyatlarda ogohlantirish`,
  },
  {
    color: "#208C93FF",
    icon: elem11,
    text: `Avtomobil turargohlarini moshqarish tizimi`,
  },
  {
    color: "#65B9BFFF",
    icon: elem12,
    text: `Yong'in xavfsizligi monitoring tizimi`,
  },
  {
    color: "#91CDD1FF",
    icon: elem13,
    text: `Obyektlarning kompleks xavfsizligi tizimi`,
  },
];

export const usefulllinks = [
  {
    title: "E-xizmatlar",
    children: [
      {
        name: "fo.birdarcha.uz",
        text: "Tadbirkorlik subyektlarini roʻyxatidan oʻtkazish",
      },
      {
        name: "my.soliq.uz",
        text: "Soliq organlari xizmatlari",
      },
      {
        name: "license.gov.uz",
        text: "Elektron litsenziyalash",
      },
    ],
  },
  {
    title: "E-ishtirok",
    children: [
      {
        name: "pm.gov.uz",
        text: "Prezidentining virtual qabulxonasi",
      },
      {
        name: "business.gov.uz",
        text: "Bosh Vazirining virtual qabulxonasi",
      },
      {
        name: "regulation.gov.uz",
        text: "Normativ-huquqiy hujjatlar loyihalarini muhokama qilish",
      },
      {
        name: "xalqnazorati.uz",
        text: "Xalq nazorati",
      },
      {
        name: "meningfikrim.uz",
        text: "Jamoatchilik tashabbuslari platformasi",
      },
      {
        name: "jamoatfikri.uz",
        text: "Jamoatchilik fikri",
      },
      {
        name: "project.gov.uz",
        text: "Normativ-huquqiy hujjatlar ishlab",
      },
      {
        name: "openbudget.uz",
        text: `O'zbekiston Respublikasi "Ochiq budjet"`,
      },
      {
        name: "president.uz",
        text: `Prezidentning rasmiy sayti`,
      },
      {
        name: "gov.uz",
        text: `Hukumat portali`,
      },
    ],
  },
  {
    title: "Xaridlar",
    children: [
      {
        name: "xarid.uz",
        text: "Davlat xaridlari",
      },
      {
        name: "dxarid.uzex.uz",
        text: "Davlat xaridlari elektron tizimi",
      },
      {
        name: "e-auksion.uz",
        text: "“E-auksion” platformasi",
      },
      {
        name: "Давлат харидлари тизими",
        text: "Davlat xaridlari elektron tizimi",
      },
    ],
  },

  {
    title: "Boshqalar",
    children: [
      {
        name: "vacancy.argos.uz",
        text: "Davlat fuqarolik xizmati vakant lavozimlarining yagona ochiq portali",
      },
      {
        name: "id.egov.uz",
        text: "Foydalanuvchi identifikatsiyasi",
      },
      {
        name: "cs.egov.uz",
        text: "Ma'lumotnomalar va tasniflagichlar",
      },
      {
        name: "reestr.uz",
        text: "Axborot tizimlari reestri",
      },
      {
        name: "ish.mehnat.uz",
        text: "Bo'sh ish o'rinlari milliy ma'lumotlar bazasi",
      },
      {
        name: "davreestr.uz",
        text: "Ko'chmas mulkka bo'lgan huquqlar reestri",
      },
      {
        name: "lex.uz",
        text: "Qonunchilik ma’lumotlari milliy bazasi",
      },
      {
        name: "vacancy.argos.uz",
        text: "Davlat fuqarolik xizmati vakant lavozimlarining yagona ochiq portali",
      },
    ],
  },
];

export const regions: IRegion[] = [
  {
    name: "Qoraqalpog'iston",
    responsible_for: {
      image: Qoraqalpogiston,
      fullname: "Kaniyazov Jumaniyaz Tileuniyazovich",
      profession: "Qoraqalpog‘iston Respublikasi bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Andijon',
    responsible_for: {
      image: Andijon,
      fullname: "Abduxalilov Boburjon Zuxridin o‘g‘li",
      profession: "Andijon viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Qashqadaryo',
    responsible_for: {
      image: Qashqadaryo,
      fullname: "Avazov Davron Shukrullo o‘g‘li",
      profession: "Qashqadaryo viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Samarqand',
    responsible_for: {
      image: Samarqand,
      fullname: "Kayumov Alisher Amrilloyevich",
      profession: "Samarqand viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Toshkent',
    responsible_for: {
      image: Toshkent,
      fullname: "Yurov Sergey Aleksandrovich",
      profession: "Toshkent shahri bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Xorazm',
    responsible_for: {
      image: Xorazm,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Xorazm viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Buxoro',
    responsible_for: {
      image: Buxoro,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Buxoro viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Navoiy',
    responsible_for: {
      image: Navoiy,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Navoiy viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Sirdaryo',
    responsible_for: {
      image: Sirdaryo,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Sirdaryo viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Toshkent viloyati',
    responsible_for: {
      image: Toshkent_vil,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Toshkent viloyati viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Jizzax',
    responsible_for: {
      image: Jizzax,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Jizzax viloyati viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Namangan',
    responsible_for: {
      image: Namangan,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Namangan viloyati viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: 'Surxondaryo',
    responsible_for: {
      image: Surxondaryo,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Surxondaryo viloyati viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
  {
    name: "Farg'ona",
    responsible_for: {
      image: Fargona,
      fullname: "Xujayev Turg‘un Kazakovich",
      profession: "Fargona viloyati viloyati bo‘yicha sektor Bosh mutaxassisi"
    }
  },
]