export type Language = 'ru' | 'kz';

export interface Translations {
  header: {
    announcementSale: string;
    announcementPay: string;
    announcementDelivery: string;
    officialStock: string;
    navColors: string;
    navAdvantages: string;
    navAttachments: string;
    navReviews: string;
    navGuarantees: string;
    navFaq: string;
    btnBuy: string;
    btnWhatsApp: string;
  };
  hero: {
    breadcrumbHome: string;
    breadcrumbCategory: string;
    discountBadge: string;
    snCheck: string;
    inStockRk: string;
    inStockSale: string;
    title: string;
    subtitle: string;
    promoPriceLabel: string;
    savingsLabel: string;
    payAfterCheck: string;
    colorLabel: string;
    viewAllColors: string;
    btnBuyDiscount: string;
    btnFastWhatsApp: string;
    highlights: {
      attachments: string;
      attachmentsDesc: string;
      case: string;
      caseDesc: string;
      noBurns: string;
      noBurnsDesc: string;
    };
    guarantees: {
      noPrepay: string;
      noPrepayDesc: string;
      fastDelivery: string;
      fastDeliveryDesc: string;
      warranty: string;
      warrantyDesc: string;
      bundle: string;
      bundleDesc: string;
    };
  };
  colors: {
    badge: string;
    title: string;
    subtitle: string;
    inStock: string;
    leftCount: string;
    selectBtn: string;
    selectedBtn: string;
    buyBtn: string;
    noPhotoNotice: string;
    paletteColorTitle: string;
  };
  advantages: {
    badge: string;
    title: string;
    subtitle: string;
    salonResult: string;
    compareTitle: string;
    compareSubtitle: string;
    standardTitle: string;
    standardPoints: string[];
    dysonTitle: string;
    dysonPoints: string[];
  };
  attachments: {
    badge: string;
    title: string;
    subtitle: string;
    oneClick: string;
    caseBadge: string;
    caseTitle: string;
    caseDescription: string;
    caseFeatures: string[];
    fullBundleDiscount: string;
    orderBundleBtn: string;
  };
  hairstyles: {
    badge: string;
    title: string;
    subtitle: string;
    wantStyleBtn: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedBuyer: string;
    addReviewBtn: string;
    reviewModalTitle: string;
    namePlaceholder: string;
    cityPlaceholder: string;
    commentPlaceholder: string;
    submitReview: string;
    reviewSuccess: string;
  };
  guarantees: {
    badge: string;
    title: string;
    subtitle: string;
    guaranteedByContract: string;
    snTitle: string;
    snText: string;
    snBadge: string;
    steps: {
      title: string;
      text: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    stillQuestions: string;
    contactManager: string;
  };
  footer: {
    desc: string;
    payAfterCheck: string;
    warranty: string;
    deliveryTitle: string;
    deliveryAlmaty: string;
    deliveryRegions: string;
    deliveryAll: string;
    supportTitle: string;
    supportHours: string;
    copyright: string;
    priceNotice: string;
  };
  modal: {
    title: string;
    subtitle: string;
    successTitle: string;
    successDesc: string;
    openWaNow: string;
    copyText: string;
    copied: string;
    nextStepsTitle: string;
    nextStep1: string;
    nextStep2: string;
    nextStep3: string;
    backBtn: string;
    selectColorLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    cityLabel: string;
    phoneLabel: string;
    customCityLabel: string;
    customCityPlaceholder: string;
    commentLabel: string;
    commentPlaceholder: string;
    payNoticeTitle: string;
    payNoticeDesc: string;
    submitBtn: string;
    submitFootnote: string;
    waGreeting: string;
    waOrderData: string;
    waName: string;
    waCity: string;
    waPhone: string;
    waColor: string;
    waBundle: string;
    waPayment: string;
    waAddress: string;
    waConfirm: string;
  };
  stickyBar: {
    colorLabel: string;
    buyBtn: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ru: {
    header: {
      announcementSale: 'Распродажа HS08: скидка -67%',
      announcementPay: 'Оплата при получении после проверки',
      announcementDelivery: 'Экспресс-доставка курьером до двери по Казахстану',
      officialStock: 'Казахстан • Официальный сток',
      navColors: 'Все цвета',
      navAdvantages: 'Преимущества',
      navAttachments: 'Комплектация',
      navReviews: 'Отзывы (4.9)',
      navGuarantees: 'Гарантии и оплата',
      navFaq: 'Вопросы',
      btnBuy: 'Купить за 49 990 ₸',
      btnWhatsApp: 'WhatsApp',
    },
    hero: {
      breadcrumbHome: 'Главная',
      breadcrumbCategory: 'Красота и уход',
      discountBadge: 'СКИДКА -67%',
      snCheck: 'Проверка S/N',
      inStockRk: 'В наличии в РК',
      inStockSale: 'Сезонная распродажа склада • Лимит 7 шт.',
      title: 'Dyson Airwrap™ HS08',
      subtitle: 'Инновационный мультистайлер для завивки, создания локонов, выпрямления и сушки волос без экстремального нагрева.',
      promoPriceLabel: 'Специальная промо-цена',
      savingsLabel: 'Экономия 100 000 ₸',
      payAfterCheck: 'Оплата после проверки',
      colorLabel: 'Цвет стайлера:',
      viewAllColors: 'Смотреть все цвета',
      btnBuyDiscount: 'Купить со скидкой 49 990 ₸',
      btnFastWhatsApp: 'Быстрый заказ через WhatsApp (без звонков)',
      highlights: {
        attachments: '6 насадок',
        attachmentsDesc: 'для любых укладок',
        case: 'Чехол',
        caseDesc: 'из эко-кожи',
        noBurns: 'Без ожогов',
        noBurnsDesc: 'эффект Коанда',
      },
      guarantees: {
        noPrepay: 'Без предоплаты:',
        noPrepayDesc: 'оплата курьеру наличными или Kaspi после проверки',
        fastDelivery: 'Быстрая доставка:',
        fastDeliveryDesc: 'день в день по Алматы и Астане, 1-3 дня по РК',
        warranty: 'Гарантия 12 месяцев:',
        warrantyDesc: 'официальный талон + 14 дней на обмен',
        bundle: 'Полный комплект HS08:',
        bundleDesc: '6 насадок + чехол из эко-кожи',
      },
    },
    colors: {
      badge: 'Оригинальная палитра Dyson',
      title: 'Палитра оттенков стайлера Dyson HS08',
      subtitle: 'Выберите ваш любимый оттенок. Каждый цвет доступен по акционной цене 49 990 ₸ вместо 149 990 ₸ с полной комплектацией 6-в-1.',
      inStock: 'В наличии',
      leftCount: 'Осталось 1–2 шт.',
      selectBtn: 'Выбрать',
      selectedBtn: 'Выбран',
      buyBtn: 'Купить',
      noPhotoNotice: 'Оригинальный двухтоновый цветовой профиль корпуса',
      paletteColorTitle: 'Цветовая гамма',
    },
    advantages: {
      badge: 'Инженерия Dyson',
      title: 'Преимущества и технологии Dyson HS08',
      subtitle: 'Создавайте безупречные укладки без экстремальных температур, сохраняя здоровье, плотность и естественный блеск каждого волоса.',
      salonResult: 'Салонный результат каждый день в домашних условиях',
      compareTitle: 'Почему миллионы девушек выбирают Dyson Airwrap',
      compareSubtitle: 'Сравнение со стандартными плойками и утюжками',
      standardTitle: 'Обычные плойки и стайлеры',
      standardPoints: [
        'Нагрев пластин до 200°C–230°C сжигает кератин в структуре волоса',
        'Требуется предварительно высушить волосы досуха феном (двойное время)',
        'Секущиеся, пересушенные кончики и потеря естественного блеска',
        'Высокий риск обжечь пальцы, уши или кожу головы горячим металлом',
      ],
      dysonTitle: 'Стайлер Dyson Airwrap HS08',
      dysonPoints: [
        'Умный датчик держит температуру строго ниже 150°C (без перегрева)',
        'Укладка прямо на влажные волосы: сушка и локоны одновременно',
        'Волосы сохраняют влагу, становятся плотными, шелковистыми и блестящими',
        'Эффект Коанда накручивает прядь воздухом — обжечься невозможно',
      ],
    },
    attachments: {
      badge: 'Комплектация Complete',
      title: 'Что входит в комплект Dyson HS08',
      subtitle: 'Полный набор из 6 инновационных насадок нового поколения и фирменного жесткого чехла для хранения.',
      oneClick: 'Быстрая фиксация одним щелчком',
      caseBadge: 'Премиум чехол в комплекте',
      caseTitle: 'Фирменный футляр для хранения из эко-кожи',
      caseDescription: 'Защищает стайлер и насадки от пыли и механических повреждений. Внутренняя отделка выполнена из мягкого велюра, крышка на надежном магнитном замке.',
      caseFeatures: [
        'Магнитная застежка',
        'Съемная бархатная крышка',
        'Щетка для очистки фильтра',
      ],
      fullBundleDiscount: 'Весь комплект со скидкой -67%',
      orderBundleBtn: 'Заказать полный комплект',
    },
    hairstyles: {
      badge: 'Любой образ каждый день',
      title: 'Какие укладки можно делать со стайлером HS08',
      subtitle: 'Один мультистайлер заменяет фен, щипцы для завивки, утюжок и комплект брашингов.',
      wantStyleBtn: 'Хочу такую укладку',
    },
    reviews: {
      badge: 'Реальный опыт',
      title: 'Отзывы довольных покупательниц в Казахстане',
      subtitle: 'Более 1 200 жительниц РК уже оценили бережный стайлинг без перегрева волос.',
      verifiedBuyer: 'Проверенная покупка в РК',
      addReviewBtn: 'Оставить свой отзыв',
      reviewModalTitle: 'Написать отзыв о покупке',
      namePlaceholder: 'Ваше имя',
      cityPlaceholder: 'Ваш город (например, Алматы)',
      commentPlaceholder: 'Поделитесь впечатлениями о стайлере, доставке и укладке...',
      submitReview: 'Опубликовать отзыв',
      reviewSuccess: 'Спасибо! Ваш отзыв успешно добавлен.',
    },
    guarantees: {
      badge: 'Безопасная покупка',
      title: '100% прозрачность и защита покупателя',
      subtitle: 'Мы заботимся о вашем спокойствии: проверяйте стайлер лично в руках до совершения оплаты.',
      guaranteedByContract: 'Гарантировано договором',
      snTitle: 'Как проверить подлинность Dyson HS08?',
      snText: 'На шнуре и на коробке расположен уникальный серийный номер с QR-кодом. При сканировании открывается официальный сайт производителя для верификации и регистрации устройства.',
      snBadge: 'Оригинальный S/N код на каждом приборе',
      steps: [
        {
          title: '1. Быстрая доставка до двери',
          text: 'Курьер привозит заказ в удобное для вас время. По Алматы и Астане — в день заказа, по регионам Казахстана — 1-3 дня.',
        },
        {
          title: '2. Проверка перед оплатой',
          text: 'Вы вскрываете коробку, осматриваете стайлер, проверяете комплектацию из 6 насадок, включаете в розетку и проверяете серийный номер.',
        },
        {
          title: '3. Оплата только после осмотра',
          text: 'Никаких предоплат! Оплачивайте курьеру наличными или переводом Kaspi Pay только если вы полностью удовлетворены покупкой.',
        },
        {
          title: '4. Гарантия 12 месяцев и возврат',
          text: 'Официальный гарантийный талон на 1 год и 14 дней на безусловный обмен или возврат согласно законодательству РК.',
        },
      ],
    },
    faq: {
      badge: 'Частые вопросы',
      title: 'Ответы на популярные вопросы',
      subtitle: 'Все, что нужно знать перед заказом стайлера Dyson HS08 по акции.',
      stillQuestions: 'Остались вопросы или нужна помощь с выбором цвета?',
      contactManager: 'Написать менеджеру в WhatsApp',
    },
    footer: {
      desc: 'Официальная распродажа европейской партии мультистайлеров Dyson Airwrap HS08 в Казахстане. Инновационные технологии укладки воздухом без термического повреждения волос.',
      payAfterCheck: 'Оплата после личной проверки',
      warranty: 'Гарантия 12 месяцев',
      deliveryTitle: 'Доставка в Казахстане',
      deliveryAlmaty: 'Алматы, Астана (день в день)',
      deliveryRegions: 'Шымкент, Караганда, Актобе (1-2 дня)',
      deliveryAll: 'Все регионы и областные центры РК',
      supportTitle: 'Связь с менеджером',
      supportHours: 'Ежедневно с 09:00 до 22:00 без выходных',
      copyright: 'Dyson Airwrap HS08 Promotion Kazakhstan. Все права защищены.',
      priceNotice: 'Цена 49 990 ₸ действительна до окончания акционного остатка на складе.',
    },
    modal: {
      title: 'Оформление заказа через WhatsApp',
      subtitle: 'Спеццена 49 990 ₸ • Оплата при получении',
      successTitle: 'Заказ передан в WhatsApp!',
      successDesc: 'Мы открыли чат WhatsApp с предзаполненными данными вашего заказа. Если окно не открылось автоматически, нажмите кнопку ниже:',
      openWaNow: 'Открыть WhatsApp сейчас',
      copyText: 'Скопировать текст',
      copied: 'Текст скопирован!',
      nextStepsTitle: 'Что будет дальше?',
      nextStep1: '1. Менеджер ответит в чате WhatsApp в течение 2-5 минут.',
      nextStep2: '2. Уточнит адрес и согласует удобное время визита курьера.',
      nextStep3: '3. Вы проверите стайлер перед оплатой курьеру.',
      backBtn: 'Вернуться на страницу',
      selectColorLabel: 'Выбрать цвет стайлера:',
      nameLabel: 'Ваше Имя',
      namePlaceholder: 'Как к вам обращаться (например, Алия)',
      cityLabel: 'Город доставки',
      phoneLabel: 'Номер телефона',
      customCityLabel: 'Укажите ваш населенный пункт',
      customCityPlaceholder: 'Например: г. Рудный или пос. Боровое',
      commentLabel: 'Адрес доставки или комментарий (по желанию)',
      commentPlaceholder: 'Улица, дом / удобное время доставки',
      payNoticeTitle: 'Оплата только при получении!',
      payNoticeDesc: 'Курьер передает стайлер лично вам в руки для проверки. Оплата наличными или Kaspi Pay.',
      submitBtn: 'Оформить заказ в WhatsApp за 49 990 ₸',
      submitFootnote: 'Нажав кнопку, вы перейдете в официальный чат WhatsApp с готовым текстом заявки.',
      waGreeting: 'Здравствуйте! Хочу оформить заказ на стайлер Dyson Airwrap HS08 со скидкой за 49 990 ₸ (вместо 149 990 ₸).',
      waOrderData: 'Данные заказа:',
      waName: 'Имя:',
      waCity: 'Город доставки:',
      waPhone: 'Телефон:',
      waColor: 'Цвет стайлера:',
      waBundle: 'Комплектация: Полный набор 6 насадок + чехол',
      waPayment: 'Оплата: При получении после личной проверки курьеру',
      waAddress: 'Адрес / Комментарий:',
      waConfirm: 'Подтвердите, пожалуйста, бронь по спеццене!',
    },
    stickyBar: {
      colorLabel: 'Цвет:',
      buyBtn: 'Купить со скидкой',
    },
  },
  kz: {
    header: {
      announcementSale: 'HS08 жаппай сатылымы: -67% жеңілдік',
      announcementPay: 'Тексергеннен кейін қолма-қол немесе Kaspi арқылы төлеу',
      announcementDelivery: 'Қазақстан бойынша есікке дейін экспресс-жеткізу',
      officialStock: 'Қазақстан • Ресми қойма',
      navColors: 'Барлық түстер',
      navAdvantages: 'Артықшылықтары',
      navAttachments: 'Жиынтығы',
      navReviews: 'Пікірлер (4.9)',
      navGuarantees: 'Кепілдіктер',
      navFaq: 'Сұрақ-жауап',
      btnBuy: '49 990 ₸ сатып алу',
      btnWhatsApp: 'WhatsApp',
    },
    hero: {
      breadcrumbHome: 'Басты бет',
      breadcrumbCategory: 'Сұлулық және күтім',
      discountBadge: 'ЖЕҢІЛДІК -67%',
      snCheck: 'S/N тексеру',
      inStockRk: 'ҚР қоймасында бар',
      inStockSale: 'Маусымдық қойма сатылымы • Шектеулі 7 дана',
      title: 'Dyson Airwrap™ HS08',
      subtitle: 'Шашты шамадан тыс қыздырмай бұйралауға, толқындандыруға, тегістеуге және кептіруге арналған инновациялық мультистайлер.',
      promoPriceLabel: 'Арнайы промо-баға',
      savingsLabel: 'Үнемдеу 100 000 ₸',
      payAfterCheck: 'Тексерген соң төлеу',
      colorLabel: 'Стайлер түсі:',
      viewAllColors: 'Барлық түстерді көру',
      btnBuyDiscount: '49 990 ₸ жеңілдікпен сатып алу',
      btnFastWhatsApp: 'WhatsApp арқылы жылдам тапсырыс (қоңыраусыз)',
      highlights: {
        attachments: '6 қондырма',
        attachmentsDesc: 'кез келген сәндеуге',
        case: 'Қап',
        caseDesc: 'эко-былғарыдан',
        noBurns: 'Күйдірмейді',
        noBurnsDesc: 'Коанда эффектісі',
      },
      guarantees: {
        noPrepay: 'Алдын ала төлемсіз:',
        noPrepayDesc: 'тексергеннен кейін курьерге қолма-қол немесе Kaspi арқылы төлеу',
        fastDelivery: 'Жылдам жеткізу:',
        fastDeliveryDesc: 'Алматы мен Астана бойынша сол күні, ҚР бойынша 1-3 күн',
        warranty: '12 ай кепілдік:',
        warrantyDesc: 'ресми талон + 14 күн айырбастауға',
        bundle: 'Толық HS08 жиынтығы:',
        bundleDesc: '6 қондырма + эко-былғары қап',
      },
    },
    colors: {
      badge: 'Dyson түпнұсқа палитрасы',
      title: 'Dyson HS08 стайлерінің реңктер палитрасы',
      subtitle: 'Өзіңізге ұнайтын реңкті таңдаңыз. Әрбір түс 149 990 ₸ орнына 49 990 ₸ акциялық бағамен 6-сы-1-де толық жиынтықта ұсынылады.',
      inStock: 'Қоймада бар',
      leftCount: '1–2 дана қалды',
      selectBtn: 'Таңдау',
      selectedBtn: 'Таңдалды',
      buyBtn: 'Сатып алу',
      noPhotoNotice: 'Корпустың түпнұсқа қос түсті реңк профилі',
      paletteColorTitle: 'Түстер гаммасы',
    },
    advantages: {
      badge: 'Dyson инженериясы',
      title: 'Dyson HS08 технологиялары мен артықшылықтары',
      subtitle: 'Шаштың саулығын, тығыздығын және табиғи жылтырлығын сақтай отырып, жоғары температурасыз мінсіз сәндеу жасаңыз.',
      salonResult: 'Үй жағдайында күн сайын салондық нәтиже',
      compareTitle: 'Неліктен миллиондаған қыздар Dyson Airwrap таңдайды',
      compareSubtitle: 'Қарапайым бұйралағыштар мен үтіктеуіштермен салыстыру',
      standardTitle: 'Қарапайым плойкалар мен стайлерлер',
      standardPoints: [
        'Пластиналардың 200°C–230°C дейін қызуы шаш құрылымындағы кератинді күйдіреді',
        'Алдымен шашты фенмен толық кептіру қажет (екі есе көп уақыт)',
        'Ұштары бөлінген, құрғақ шаш және табиғи жылтырдың жоғалуы',
        'Ыстық металмен саусақтарды, құлақты немесе басты күйдіру қаупі жоғары',
      ],
      dysonTitle: 'Dyson Airwrap HS08 стайлері',
      dysonPoints: [
        'Ақылды датчик температураны қатаң түрде 150°C-тан төмен ұстайды (күйдірмейді)',
        'Ылғал шашқа тікелей сәндеу: кептіру мен бұйралау бір уақытта',
        'Шаш ылғалды сақтайды, қалың, жібектей және жылтыр болады',
        'Коанда эффектісі бұрымды ауамен орайды — күйіп қалу мүмкін емес',
      ],
    },
    attachments: {
      badge: 'Complete толық жиынтығы',
      title: 'Dyson HS08 жиынтығына не кіреді',
      subtitle: 'Жаңа буындағы 6 инновациялық қондырманың толық жиынтығы және сақтауға арналған фирмалық қап.',
      oneClick: 'Бір шертумен оңай бекіту',
      caseBadge: 'Премиум қап жиынтықта',
      caseTitle: 'Эко-былғарыдан жасалған фирмалық сақтау қабы',
      caseDescription: 'Стайлер мен қондырмаларды шаңнан және механикалық зақымданудан қорғайды. Ішкі әрлеуі жұмсақ барқыттан жасалған, магнитті құлыппен жабылады.',
      caseFeatures: [
        'Магнитті бекіткіш',
        'Алынбалы барқыт қақпақ',
        'Сүзгіні тазалауға арналған щетка',
      ],
      fullBundleDiscount: 'Барлық жиынтық -67% жеңілдікпен',
      orderBundleBtn: 'Толық жиынтыққа тапсырыс беру',
    },
    hairstyles: {
      badge: 'Күн сайын кез келген бейне',
      title: 'HS08 стайлерімен қандай сәндеулер жасауға болады',
      subtitle: 'Бір мультистайлер фенді, бұйралағышты, үтіктеуішті және брашинг жиынтығын алмастырады.',
      wantStyleBtn: 'Осындай сәндеуді қалаймын',
    },
    reviews: {
      badge: 'Шынайы тәжірибе',
      title: 'Қазақстандағы риза сатып алушылардың пікірлері',
      subtitle: 'ҚР бойынша 1 200-ден астам қыз шашты күйдірмейтін қауіпсіз сәндеуді бағалады.',
      verifiedBuyer: 'ҚР-да тексерілген сатып алу',
      addReviewBtn: 'Өз пікіріңізді қалдыру',
      reviewModalTitle: 'Сатып алу туралы пікір жазу',
      namePlaceholder: 'Сіздің атыңыз',
      cityPlaceholder: 'Сіздің қалаңыз (мысалы, Алматы)',
      commentPlaceholder: 'Стайлер, жеткізу және сәндеу туралы әсеріңізбен бөлісіңіз...',
      submitReview: 'Пікірді жариялау',
      reviewSuccess: 'Рахмет! Сіздің пікіріңіз сәтті қосылды.',
    },
    guarantees: {
      badge: 'Қауіпсіз сатып алу',
      title: '100% ашықтық және сатып алушыны қорғау',
      subtitle: 'Біз сіздің сеніміңізді бағалаймыз: төлем жасамас бұрын стайлерді жеке өз қолыңызбен тексеріңіз.',
      guaranteedByContract: 'Шартпен кепілдендірілген',
      snTitle: 'Dyson HS08 түпнұсқалығын қалай тексеруге болады?',
      snText: 'Сымда және қорапта QR-коды бар бірегей сериялық нөмір орналасқан. Сканерлеу кезінде құрылғыны тексеру және тіркеу үшін ресми сайт ашылады.',
      snBadge: 'Әрбір құрылғыда түпнұсқа S/N коды',
      steps: [
        {
          title: '1. Есікке дейін жылдам жеткізу',
          text: 'Курьер тапсырысты сізге ыңғайлы уақытта әкеледі. Алматы мен Астана бойынша — тапсырыс берген күні, ҚР өңірлері бойынша — 1-3 күн.',
        },
        {
          title: '2. Төлем жасамас бұрын тексеру',
          text: 'Қорапты ашып, стайлерді қарайсыз, 6 қондырманың толықтығын тексересіз, розеткаға қосып, сериялық нөмірін тексересіз.',
        },
        {
          title: '3. Тек тексергеннен кейін төлеу',
          text: 'Ешқандай алдын ала төлемсіз! Тауарға толық көңіліңіз толған жағдайда ғана курьерге қолма-қол немесе Kaspi Pay арқылы төлейсіз.',
        },
        {
          title: '4. 12 ай кепілдік және қайтару',
          text: '1 жылдық ресми кепілдік талоны және ҚР заңнамасына сәйкес сөзсіз айырбастау немесе қайтару үшін 14 күн беріледі.',
        },
      ],
    },
    faq: {
      badge: 'Жиі қойылатын сұрақтар',
      title: 'Танымал сұрақтарға жауаптар',
      subtitle: 'Dyson HS08 стайлеріне акция бойынша тапсырыс бермес бұрын білуіңіз керек барлық ақпарат.',
      stillQuestions: 'Сұрақтарыңыз қалды ма немесе түс таңдауда көмек керек пе?',
      contactManager: 'WhatsApp-та менеджерге жазу',
    },
    footer: {
      desc: 'Қазақстандағы Dyson Airwrap HS08 мультистайлерлерінің еуропалық партиясын ресми жаппай сату. Шашты термиялық зақымдаусыз ауамен сәндеудің инновациялық технологиясы.',
      payAfterCheck: 'Жеке тексергеннен кейін төлеу',
      warranty: '12 ай кепілдік',
      deliveryTitle: 'Қазақстан бойынша жеткізу',
      deliveryAlmaty: 'Алматы, Астана (сол күні жеткізу)',
      deliveryRegions: 'Шымкент, Қарағанды, Ақтөбе (1-2 күн)',
      deliveryAll: 'ҚР барлық өңірлері мен облыс орталықтары',
      supportTitle: 'Менеджермен байланыс',
      supportHours: 'Күн сайын 09:00-ден 22:00-ге дейін демалыссыз',
      copyright: 'Dyson Airwrap HS08 Promotion Kazakhstan. Барлық құқықтар қорғалған.',
      priceNotice: '49 990 ₸ бағасы қоймадағы акциялық қалдық біткенше жарамды.',
    },
    modal: {
      title: 'WhatsApp арқылы тапсырыс рәсімдеу',
      subtitle: 'Арнайы баға 49 990 ₸ • Қолға алғанда төлеу',
      successTitle: 'Тапсырыс WhatsApp-қа жіберілді!',
      successDesc: 'Біз сіздің тапсырысыңыздың дайын деректерімен WhatsApp чатын аштық. Егер терезе автоматты түрде ашылмаса, төмендегі батырманы басыңыз:',
      openWaNow: 'WhatsApp-ты қазір ашу',
      copyText: 'Мәтінді көшіріп алу',
      copied: 'Мәтін көшірілді!',
      nextStepsTitle: 'Әрі қарай не болады?',
      nextStep1: '1. Менеджер WhatsApp чатында 2-5 минут ішінде жауап береді.',
      nextStep2: '2. Мекенжайды нақтылап, курьердің ыңғайлы уақытын келіседі.',
      nextStep3: '3. Сіз курьерге төлемес бұрын стайлерді тексересіз.',
      backBtn: 'Бетке оралу',
      selectColorLabel: 'Стайлер түсін таңдаңыз:',
      nameLabel: 'Сіздің атыңыз',
      namePlaceholder: 'Сізге қалай жүгінуге болады (мысалы, Әлия)',
      cityLabel: 'Жеткізу қаласы',
      phoneLabel: 'Телефон нөмірі',
      customCityLabel: 'Елді мекеніңізді жазыңыз',
      customCityPlaceholder: 'Мысалы: Рудный қ. немесе Бурабай ауылы',
      commentLabel: 'Жеткізу мекенжайы немесе түсініктеме (қалауыңызша)',
      commentPlaceholder: 'Көше, үй / ыңғайлы жеткізу уақыты',
      payNoticeTitle: 'Тек алған кезде төлеу!',
      payNoticeDesc: 'Курьер стайлерді тексеру үшін тікелей өз қолыңызға береді. Төлем қолма-қол немесе Kaspi Pay.',
      submitBtn: 'WhatsApp арқылы 49 990 ₸ тапсырыс беру',
      submitFootnote: 'Батырманы басқан соң, сіз дайын өтініш мәтінімен ресми WhatsApp чатына өтесіз.',
      waGreeting: 'Сәлеметсіз бе! Dyson Airwrap HS08 стайлеріне 149 990 ₸ орнына 49 990 ₸ жеңілдікпен тапсырыс бергім келеді.',
      waOrderData: 'Тапсырыс деректері:',
      waName: 'Аты:',
      waCity: 'Жеткізу қаласы:',
      waPhone: 'Телефон:',
      waColor: 'Стайлер түсі:',
      waBundle: 'Жиынтығы: 6 қондырманың толық жинағы + қап',
      waPayment: 'Төлем: Тексергеннен кейін курьерге төлеу',
      waAddress: 'Мекенжай / Түсініктеме:',
      waConfirm: 'Өтініш, арнайы баға бойынша броньды растаңыз!',
    },
    stickyBar: {
      colorLabel: 'Түсі:',
      buyBtn: 'Жеңілдікпен сатып алу',
    },
  },
};
