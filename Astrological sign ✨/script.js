const astrologicalSigns = {
  Aries: {
    startDate: {
      month: `March`,
      day: 21,
    },
    endDate: {
      month: `April`,
      day: 20,
    },
  },
  Taurus: {
    startDate: {
      month: `April`,
      day: 21,
    },
    endDate: {
      month: `May`,
      day: 21,
    },
  },
  Gemini: {
    startDate: {
      month: `May`,
      day: 22,
    },
    endDate: {
      month: `June`,
      day: 21,
    },
  },
  Cancer: {
    startDate: {
      month: `June`,
      day: 22,
    },
    endDate: {
      month: `July`,
      day: 22,
    },
  },
  Leo: {
    startDate: {
      month: `July`,
      day: 23,
    },
    endDate: {
      month: `August`,
      day: 21,
    },
  },
  Virgo: {
    startDate: {
      month: `August`,
      day: 22,
    },
    endDate: {
      month: `September`,
      day: 23,
    },
  },
  Libra: {
    startDate: {
      month: `September`,
      day: 24,
    },
    endDate: {
      month: `October`,
      day: 23,
    },
  },
  Scorpio: {
    startDate: {
      month: `October`,
      day: 24,
    },
    endDate: {
      month: `November`,
      day: 22,
    },
  },
  Sagittarius: {
    startDate: {
      month: `November`,
      day: 23,
    },
    endDate: {
      month: `December`,
      day: 22,
    },
  },
  Capricorn: {
    startDate: {
      month: `December`,
      day: 23,
    },
    endDate: {
      month: `January`,
      day: 20,
    },
  },
  Aquarius: {
    startDate: {
      month: `January`,
      day: 21,
    },
    endDate: {
      month: `February`,
      day: 19,
    },
  },
  Pisces: {
    startDate: {
      month: `February`,
      day: 20,
    },
    endDate: {
      month: `March`,
      day: 20,
    },
  },
};

const users = [
  {
    name: "Larry Page",
    dayOfBirth: 26,
    monthOfBirth: `March`,
  },
  {
    name: "Bill Gates",
    dayOfBirth: 28,
    monthOfBirth: `October`,
  },
  {
    name: "Mark Zuckerberg",
    dayOfBirth: 14,
    monthOfBirth: `May`,
  },
];

let date;
const monthsList = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

//1
class Time {
  static getDate() {
    return new Date();
  }

  static getDay() {
    return Time.getDate().getUTCDate();
  }

  static getMonth() {
    return Time.getDate().getMonth();
  }

  static getMonthNames() {
    return monthsList;
  }

  static monthName(month=Time.getMonth()) {
    return monthsList[month];
  }
}

let monthLocalizedString = function (month, locale) {
  return new Date(2010, month).toLocaleString(locale, { month: "long" });
};

console.log(Time.getDate());
console.log(Time.getDay());
console.log(Time.getMonth());
console.log(Time.getMonthNames());
console.log(Time.monthName());

console.log(monthLocalizedString(10, "en"));

//2

class Astrological extends Time {
  constructor() {
    super();
  }
  
  static astrologicalSign(day=Time.getDay(), month=Time.monthName()) {
    for(let key in astrologicalSigns){
      let sign = astrologicalSigns[key];
      
      if(sign.startDate.month===month && sign.startDate.day<=day || sign.endDate.month===month && sign.endDate.day>=day){
        return key;
      }
    }
  }
}
console.log(Astrological.astrologicalSign(25, `October`));

//3
class Human extends Astrological {
  constructor(obj) {
    super();
    for(let key in obj){
      this[key] = obj[key];
    }
  }

  astrologicalSign() {
    return `${this.name} is ${Astrological.astrologicalSign(this.dayOfBirth, this.monthOfBirth)}`;
  }
}

users
  .map(obj => new Human(obj))
  .forEach((element) => console.log(element.astrologicalSign()));