var lorem = require('lorem-ipsum');

var COLORS = ['default', 'blue', 'purple', 'red', 'green'];

function generateBadges() {
  var sentences = lorem({
    count: 150,
    units: 'sentences'
  }).split('. ');

  var colorsCount = COLORS.length;
  return sentences.map(function(sentence) {
    var badge = {
      title: sentence
    };

    var color = COLORS[Math.floor(Math.random() * colorsCount)];
    if (color != 'default') {
      badge.color = color;
    }

    return badge;
  });
}

module.exports = {
  maxCount: 100,

  employees: {
    'apopovich': {
      name: 'Андрей Попович',
      badges: [
        {
          image: 'images/badges/attention-256.png',
          title: 'Узнал о Школе разработки интерфейсов'
        },
        {
          image: 'images/badges/accept-tick-icon-12.png',
          color: 'purple',
          title: 'Выполнил задания'
        },
        {
          image: 'images/badges/flaticon-pencil-2.png',
          color: 'green',
          title: 'Заполнил форму регистрации'
        },
        {
          image: 'images/badges/like-flat.png',
          color: 'blue',
          title: 'Поступил в Школу разработки интерфейсов'
        }
      ]
    },

    'ivanov': {
      name: 'Иван Иванов',
      badges: generateBadges()
    }
  }
};