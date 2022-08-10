Необходимо реализвовать функцию astrologicalSign, которая может возвращать:

название текущего знака зодиака (например, если сегодня 30.11, то текущий знак зодиака Sagittarius); 
Пример: astrologicalSign() => `Sagittarius`
название знака зодиака в зависимоти от переданного дня и месяца. 
Пример: astrologicalSign(29,`September`) => `Libra`

название знака зодиака для объекта в зависимости от его дня и месяца рождения, в контексте которого вызвана функция. Например: BillGates.astrologicalSign() => `Scorpio`.

Дано:
Объект astrologicalSigns в котором каждый вложенный объект содержит временной диапазон знака зодиака:
const astrologicalSigns = {
  Aries: {
    startDate: {
      month: `March`,
      day: 21
    },
    endDate: {
      month: `April`,
      day: 20
    }
  },
  Taurus: {
    startDate: {
      month: `April`,
      day: 21
    },
    endDate: {
      month: `May`,
      day: 21
    }
  },
  Gemini: {
    startDate: {
      month: `May`,
      day: 22
    },
    endDate: {
      month: `June`,
      day: 21
    }
  },
  Cancer: {
    startDate: {
      month: `June`,
      day: 22
    },
    endDate: {
      month: `July`,
      day: 22
    }
  },
  Leo: {
    startDate: {
      month: `July`,
      day: 23
    },
    endDate: {
      month: `August`,
      day: 21
    }
  },
  Virgo: {
    startDate: {
      month: `August`,
      day: 22
    },
    endDate: {
      month: `September`,
      day: 23
    }
  },
  Libra: {
    startDate: {
      month: `September`,
      day: 24
    },
    endDate: {
      month: `October`,
      day: 23
    }
  },
  Scorpio: {
    startDate: {
      month: `October`,
      day: 24
    },
    endDate: {
      month: `November`,
      day: 22
    }
  },
  Sagittarius: {
    startDate: {
      month: `November`,
      day: 23
    },
    endDate: {
      month: `December`,
      day: 22
    }
  },
  Capricorn: {
    startDate: {
      month: `December`,
      day: 23
    },
    endDate: {
      month: `January`,
      day: 20
    }
  },
  Aquarius: {
    startDate: {
      month: `January`,
      day: 21
    },
    endDate: {
      month: `February`,
      day: 19
    }
  },
  Pisces: {
    startDate: {
      month: `February`,
      day: 20
    },
    endDate: {
      month: `March`,
      day: 20
    }
  }
}
Массив users:
const users = [
  {
    name: 'Larry Page',
    dayOfBirth: 26,
    monthOfBirth: `March`
  },
  {
    name: 'Bill Gates',
    dayOfBirth: 28,
    monthOfBirth: `October`
  },
  {
    name: 'Mark Zuckerberg',
    dayOfBirth: 14,
    monthOfBirth: `May`
  }
]

Задача:
Создать класс Time, который содержит:

статические геттеры: date, day, month, monthNames.
геттер date должен возвращать текущую дату – new Date()
геттер day должен возвращать текущий день – getUTCDate()
геттер month должен возвращать номер текущего месяц – getMonth()
геттер monthNames должен возвращать массив с перечнем месяцев – [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

статический метод monthName, который возвращает:

название текущего месяца, если при вызове метода номер месяца НЕ передан. 
Пример: Time.monthName() должен вернуть November.

название месяца, номер которого передан при вызове метода.
Пример: Time.monthName(3) должен вернуть April.

Создать класс Astrological, который наследуется от класса Time и содержит:

статический метод astrologicalSign, который принимает на вход два параметра: day – день; month – название месяца. 
Пример: Astrological.astrologicalSign(29,`September`);

Метод возвращает:

название знака зодиака, в зависимости от переданного дня и названия месяца. 
Пример: Astrological.astrologicalSign(29,`September`) => Libra.
название текущего знака зодиака, если метод вызван без параметров day и month. Astrological.astrologicalSign() => Sagittarius.

Создать класс Human, который наследуется от класса Astrological и содержит:
метод astrologicalSign, который возвращает строку с информацией о знаке зодиака юзера, в контексте которого вызывается. 
Пример: LarryPage.astrologicalSign() => `Larry Page is Aries`.

Каждый объект в заданном массиве users делаем экземпляром класса Human и в контексте каждого из юзеров вызываем метод astrologicalSign.
