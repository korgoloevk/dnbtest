const questions = {
  0: {
    question:
      "Началась война и у тебя есть выбор — в какие войска пойти. Что выберешь?",
    answers: {
      0: ["По фигу! Дайте автомат и патронов побольше!", 12],
      1: ["Рембат. Люблю чинить всякое.", 6],
      2: ["Артиллерия. Люблю математику.", 2],
      3: ["В каких в Чечне и в Сирии служил, в таких и тут буду.", 10],
      4: ["Девушки любят лётчиков! Авиация.", 8],
      5: ["У меня белый билет и я боюсь громких звуков.", 0],
    },
  },
  1: {
    question:
      "Окей, ты прошёл подготовку, попал в часть, на завтра объявляют наступление. Твои действия?",
    answers: {
      0: ["Придумаю, где получше спрятаться.", 0],
      1: ['Отправлю любимой фото в снаряге, напишу: "Жди меня".', 8],
      2: ["Изучу карту, почитаю военную литературу.", 2],
      3: ["Почищу оружие, подгоню снарягу, приготовлюсь.", 6],
      4: ["Да разве это наступление? Под Кандагаром было круче!", 10],
      5: [
        "Пойду в первых рядах, постараюсь убить как можно больше врагов.",
        12,
      ],
    },
  },
  2: {
    question:
      "Ты высадился на территории противника. Что будешь делать в первую очередь?",
    answers: {
      0: ["Ух ты, какой танчик! Срочно трофеим!", 6],
      1: ["Барышня, не подскажете, где тут часть?", 8],
      2: ["Где они? Джонни, они на деревьях! Ра-та-та-та-та!", 12],
      3: ["Крайний раз, когда я здесь был, располага была вон там.", 10],
      4: ["Какая необычная архитектура!", 2],
      5: ["Не стреляйте! Я уже сдаюсь!", 0],
    },
  },
  3: {
    question: "Тебе нужно допросить пленного. Как будешь вести допрос?",
    answers: {
      0: ["Твоя девчонка ждёт! Расскажешь всё — увидишь её!", 8],
      1: ["Спрашивать одно и то же 20 раз, он запутается и сдастся.", 2],
      2: ["О чём с ним разговаривать? Мы пленных не берём! ", 12],
      3: ["Ты с какого года? Я таких, как ты, пачкам раскалывал!", 10],
      4: ["Предложу медпомощь, и он сам всё расскажет.", 10],
      5: ["Откажусь. Допрашивать людей — не моё.", 0],
    },
  },
  4: {
    question: "Ты попал под обстрел. Что делать?",
    answers: {
      0: ["Покажите, откуда эти гниды стреляют! Порву!", 12],
      1: ['А помните, у Толстого такое было в "Севастопольских рассказах"?', 2],
      2: ["Куда бежать, за кого прятаться?", 0],
      3: ['А что летит-то? Мины, "Грады", "Ураганы"?', 10],
      4: ["Запилю тикток на фоне.", 8],
      5: ["Парни, давайте уже в блиндаж!", 6],
    },
  },
  5: {
    question:
      "Это сладкое слово — увал. У тебя наконец-то свободный вечер. Чем займёшься?",
    answers: {
      0: ["Что будем пить, девочки?", 8],
      1: ["Почитаю. Напишу стих о войне.", 2],
      2: ["У тачки надо резину поменять — вот займусь.", 6],
      3: ["Напьюсь, набью морду тыловым крысам, проснусь в участке", 12],
      4: ["Сбегу и спрячусь, авось не найдут.", 0],
      5: ["Встречусь с пацанами. Посидим, вспомним прошлое.", 10],
    },
  },
  6: {
    question:
      "Ты командир и можешь придумать своему батальону шеврон. Что на нём будет?",
    answers: {
      0: ["Эмблема одного из римских легионов.", 2],
      1: ["Роза и кинжал.", 8],
      2: ["Лев, рвущий на куски волка. Или наоборот", 12],
      3: ["Автомат в разрезе.", 6],
      4: ["Пусть молодёжь придумывает, мне некогда!", 10],
      5: ["Голубь мира.", 0],
    },
  },
  7: {
    question: "Всё закончилось, победа наша. Чем займёшься теперь?",
    answers: {
      0: ["Что, так быстро? Ну-ка, где ещё есть горячие точки?!", 12],
      1: ["К психотерапевту!", 0],
      2: ["Ух ты, зарплаты сколько накопилось! Сделаю ремонт.", 6],
      3: ["Подсчитаю, какие меня ждут льготы и пенсия.", 10],
      4: ["Приеду домой в парадной форме, все девчонки мои.", 8],
      5: ["Опубликую мемуары, буду искать бездны в своих глазах.", 2],
    },
  },
  8: {
    question:
      "Ты едешь в отпуск и у бассейна встречаешь представителя страны-неприятеля. О чём поговорите?",
    answers: {
      0: ["О чём с ним разговаривать? Нннна!", 12],
      1: ["Девушка? Соблазню! Парень? Уведу его девушку!", 8],
      2: ["На моей памяти таких стран штук 10. Какой именно?", 10],
      3: ["Простите нас!", 0],
      4: ["Ну, признай: наши бэтэры лучше!", 6],
      5: ["Наша культурная близость важнее прошлых разногласий.", 2],
    },
  },
};

const answers = {
  vldl: "Валидол — твой позывной. Выстрелы и взрывы пугают тебя, близость неприятеля заставляет хвататься за сердце и пить одноимённое лекарство. Война — не твоё, и лучшее, что может сделать твой командир, — это отправить тебя домой.",
  oxi: "Позывной Оксимирон, как слышно? То ли ты слишком образован для войны, то ли война слишком некультурна для тебя. Между боями ты успеваешь проглотить кучу книг и выучить ещё один язык, а товарищей по окопу ты буквально достал высшими смыслами и культурными ассоциациями. Зато в военной академии тебе не будет цены.",
  fixik:
    "Ты Фиксик. С закрытыми глазами соберёшь и разберешь любое оружие, поставишь на ход танк, из говна и палок построишь гаубицу. Инструменты, масло и прохлада ремонтной мастерской — твоя стихия. Звучит не очень захватывающе, но в условиях войны ты бесценен.",
  romeo:
    "Ромео, приём! Война войной, но девушки — твоя главная страсть. У тебя точно есть инста, в которой ты выкладываешь себя в форме в разных ракурсах, на стрельбах ты можешь не всегда попадать в цель, зато в девичье сердце — 10 из 10.",
  ded: "Ты Дед. Побывал во всех горячих точках, куда смог попасть, видел многое дерьмо и с удовольствием о нём вспоминаешь. Знаешь ответ прежде, чем тебя о чём-то спросили, а на привале сослуживцы тянут спичку — кто сегодня в десятый раз слушает твои офигительные истории.",
  brsrk:
    "Твой позывной — Берсерк. Ты внушаешь ужас врагам, твои боевые товарищи вытаскивают из самых опасных заварух, и даже во сне ты крошишь неприятеля и поднимаешь знамя над чужими городами. И если ты проходишь этот тест — значит, чудом всё ещё жив. Может, поосторожнее?",
};