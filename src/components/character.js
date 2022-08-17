export default function character() {
  const role = [
    "Rockerboys",
    "Solos",
    "Netrunners",
    "Techies",
    "Medias",
    "Cops",
    "Corporates",
    "Fixers",
    "Nomads",
  ];

  const proffSkills = {
    Rockerboys: [
      "Харизматичное лидерство",
      "Осведомленность/наблюдательность",
      "Выступление",
      "Гардероб и стиль",
      "Сочинение",
      "Драка",
      "Игра на инструментах",
      "Знание улиц",
      "Убеждение и забалтывание",
      "Соблазнение",
    ],
    Solos: [
      "Чувство боя",
      "Осведомленность/наблюдательность",
      "Пистолеты",
      "Боевые искусства/Драка(выбрать одно)",
      "Ближний бой",
      "Оружейник",
      "Винтовки",
      "Атлетика",
      "Пистолет-пулеметы",
      "Скрытность",
    ],
    Netrunners: [
      "Интерфей",
      "Осведомленность/наблюдательность",
      "Базовые технологи",
      "Образование",
      "Системные знания",
      "Кибер-Технологи",
      "Конструирование “Кибердек”",
      "Сочинение",
      "Электроника",
      "Программирование",
    ],
    Techies: [
      "Жюри Риг",
      "Осведомленность/наблюдательность",
      "Базовые технологи",
      "Кибер-Технологии",
      "Преподавание",
      "Образование",
      "Электроника",
      "Любой технический навык",
      "Любой технический навык",
      "Любой технический навык",
    ],
    Medias: [
      "Достоверность",
      "Осведомленность/наблюдательность",
      "Сочинени",
      "Образование",
      "Убеждение",
      "Понимание людей",
      "Социальность",
      "Знание улиц",
      "Фотография и Кинофильм",
      "Интервью",
    ],
    Cops: [
      "Авторитет",
      "Осведомленность/наблюдательность",
      "Пистолеты",
      "Понимание людей",
      "Атлетика",
      "Образование",
      "Драка",
      "Ближний бой",
      "Допрос",
      "Знание улиц",
    ],
    Corporates: [
      "Ресурсы",
      "Осведомленность/наблюдательность",
      "Понимание людей",
      "Образование",
      "Поиск библиотек",
      "Социальность",
      "Убеждение",
      "Фондовый Рынок",
      "Гардероб и стиль",
      "Уход за собой",
    ],
    Fixers: [
      "Уличная сделка",
      "Осведомленность/наблюдательность",
      "Подделка",
      "Пистолеты",
      "Драка",
      "Ближний бой",
      "Взлом замков",
      "Карманная кража",
      "Запугивание",
      "Убеждение",
    ],
    Nomads: [
      "Семья",
      "Осведомленность/наблюдательность",
      "Выносливость",
      "Ближний бой",
      "Винтовки",
      "Вождение",
      "Базовые технологи",
      "Выживание в дикой местности",
      "Драка",
      "Атлетика",
    ],
  };

  const armor = {
    1: [0, 4, 4, 4, 4, 4, "HeavyLather", 0],
    2: [0, 10, 0, 0, 0, 0, "ArmorVest", 0],
    3: [0, 14, 14, 14, 0, 0, "LightArmorJacket", 0],
    4: [0, 14, 14, 14, 0, 0, "LightArmorJacket", 0],
    5: [0, 18, 18, 18, 0, 0, "MedArmorJacket", 1],
    6: [0, 18, 18, 18, 0, 0, "MedArmorJacket", 1],
    7: [0, 18, 18, 18, 0, 0, "MedArmorJacket", 1],
    8: [0, 20, 20, 20, 0, 0, "HeavyArmorJacket", 2],
    9: [0, 20, 20, 20, 0, 0, "HeavyArmorJacket", 2],
    10: [25, 25, 25, 25, 25, 25, "MetalGear", 2],
  };

  const weapon = {
    1: ["Knife"],
    2: ["Light Pistol"],
    3: ["Medium Pistol"],
    4: ["Heavy Pistol"],
    5: ["Heavy Pistol"],
    6: ["Light SMG"],
    7: ["Light Assault Rifle"],
    8: ["Medium Assault Rifle"],
    9: ["Heavy Assault Rifle"],
    10: ["Heavy Assault Rifle"],
  };

  let skills = [];
  let trueArmor;
  let trueWeapon;

  function generateRole() {
    const classNumber = Math.floor(Math.random() * 9);
    //console.log(classNumber);
    return classNumber;
  }

  function generateStats() {
    const FirstD6 = Math.floor(Math.random() * 7) + 1;
    const SecondD6 = Math.floor(Math.random() * 7) + 1;
    let fullStats;
    if (FirstD6 + SecondD6 > 10) {
      fullStats = 10;
    } else fullStats = FirstD6 + SecondD6;
    // console.log("Первый д6: ", FirstD6);
    // console.log("Второй д6: ", SecondD6);
    // console.log("Два д6: ", FirstD6 + SecondD6);
    // console.log("Итоговый стат: ", fullStats);
    return fullStats;
  }

  function generateSkills() {
    let globalPoints = 0;
    let skill;
    while (skills.length < 10) {
      if (globalPoints >= 40) {
        skill = 0;
      } else skill = Math.floor(Math.random() * 11);
      if (globalPoints + skill > 40) {
        skill = 40 - globalPoints;
      }
      globalPoints += skill;
      skills.push(skill);
    }
    // console.log(globalPoints);
    // console.log(skills);
    return skills;
  }

  const trueRole = role[generateRole()];

  function generateArmor() {
    trueArmor = Math.floor(Math.random() * 11);
    if (trueRole === "Solos") trueArmor += 3;
    if (trueRole === "Cops" || trueRole === "Nomads") trueArmor += 2;
    if (trueArmor > 10) trueArmor = 10;
  }

  function generateWeapon() {
    trueWeapon = Math.floor(Math.random() * 11);
    if (trueRole === "Solos") trueWeapon += 3;
    if (trueRole === "Cops" || trueRole === "Nomads") trueWeapon += 2;
    if (trueWeapon > 10) trueWeapon = 10;
  }

  const trueInt = generateStats();
  const trueRef = generateStats();
  const trueTech = generateStats();
  const trueCool = generateStats();
  const trueAttr = generateStats();
  const trueLuck = generateStats();
  const trueMa = generateStats();
  const trueBody = generateStats();
  const trueEmp = generateStats();

  let BodyTypeModificator;

  switch (trueBody) {
    case 2:
      BodyTypeModificator = 0;
      break;
    case 3:
    case 4:
      BodyTypeModificator = 1;
      break;
    case 5:
    case 6:
    case 7:
      BodyTypeModificator = 2;
      break;
    case 8:
    case 9:
      BodyTypeModificator = 3;
      break;
    case 10:
      BodyTypeModificator = 4;
      break;
    default:
      alert("Похоже вы СВЕРХЧЕЛОВЕК");
  }

  generateSkills();
  generateArmor();
  generateWeapon();

  return (
    <div className="character">
      <div className="character__wrapper">
        <div className="character__info character__info_title">NAME</div>
        <div className="character__name">Чак</div>
        <div className="character__info character__info_title">ROLE</div>
        <div className="character__role">{trueRole}</div>
      </div>
      <div className="character__info character__info_title character__info_stats">
        STATS
      </div>
      <div className="character__wrapper">
        <div className="character__stats character__stats_int">
          INT [{trueInt}]
        </div>
        <div className="character__stats character__stats_ref">
          REF [{trueRef}/{armor[trueArmor][7]}]
        </div>
        <div className="character__stats character__stats_tech">
          TECH [{trueTech}]
        </div>
        <div className="character__stats character__stats_cool">
          COOL [{trueCool}]
        </div>
        <div className="character__stats character__stats_attr">
          ATTR [{trueAttr}]
        </div>
        <div className="character__stats character__stats_luck">
          LUCK [{trueLuck}]
        </div>
        <div className="character__stats character__stats_ma">
          MA [{trueMa}]
        </div>
        <div className="character__stats character__stats_body">
          BODY [{trueBody}]
        </div>
        <div className="character__stats character__stats_emp">
          EMP [{trueEmp}/0]
        </div>
      </div>
      <div className="character__wrapper character__wrapper_vertical">
        <div className="character__wrapper character__wrapper_vertical">
          <div className="character__info character__info_title">Location</div>
          <div className="character__info character__info_title">Armor SP</div>
        </div>
        <div className="character__wrapper character__wrapper_armor">
          <div className="character__def character__def_title">Head 1</div>
          <div className="character__def character__def_title">Torso 2-4</div>
          <div className="character__def character__def_title">R.Arm 5</div>
          <div className="character__def character__def_title">L.Arm 6</div>
          <div className="character__def character__def_title">R.Leg 7-8</div>
          <div className="character__def character__def_title">L.Leg 9-10</div>
          <div className="character__def character__def_head">
            {armor[trueArmor][0]}
          </div>
          <div className="character__def character__def_torso">
            {armor[trueArmor][1]}
          </div>
          <div className="character__def character__def_rArm">
            {armor[trueArmor][2]}
          </div>
          <div className="character__def character__def_lArm">
            {armor[trueArmor][3]}
          </div>
          <div className="character__def character__def_rLeg">
            {armor[trueArmor][4]}
          </div>
          <div className="character__def character__def_lLeg">
            {armor[trueArmor][5]}
          </div>
        </div>
      </div>
      <div className="character__wrapper">
        <div className="character__wrapper character__wrapper_vertical">
          <div className="character__save character__save_name">SAVE</div>
          <div className="character__save character__save_value">
            {trueBody}
          </div>
        </div>
        <div className="character__wrapper character__wrapper_vertical">
          <div className="character__save character__save_name">BTN</div>
          <div className="character__save character__save_value">
            {BodyTypeModificator}
          </div>
        </div>
        <div className="character__wrapper character__wrapper_vertical">
          <div className="character__info character__info_title">
            ARMOR NAME
          </div>
          <div className="character__equipment">{armor[trueArmor][6]}</div>
        </div>
        <div className="character__wrapper character__wrapper_vertical">
          <div className="character__info character__info_title">
            WEAPON TYPE
          </div>
          <div className="character__equipment">{weapon[trueWeapon][0]}</div>
        </div>
      </div>
      <div className="character__wrapper">
        <div className="character__info character__info_title">SKILL</div>
        <div className="character__skills character__skills_proff">
          {proffSkills[trueRole][0]} [{skills[0]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][1]} [{skills[1]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][2]} [{skills[2]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][3]} [{skills[3]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][4]} [{skills[4]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][5]} [{skills[5]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][6]} [{skills[6]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][7]} [{skills[7]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][8]} [{skills[8]}]
        </div>
        <div className="character__skills">
          {proffSkills[trueRole][9]} [{skills[9]}]
        </div>
      </div>
    </div>
  );
}
