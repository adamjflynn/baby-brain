const { Baby } = require('../models');

const babyData = [
  {
    baby_name: 'chomper',
    parent_id: 1
  },
  {
    baby_name: 'boomer',
    parent_id: 2
  },
  {
    baby_name: 'hunter',
    parent_id: 3
  }
]

const seedBabies = () => {
  Baby.bulkCreate(babyData)
}
module.exports = seedBabies