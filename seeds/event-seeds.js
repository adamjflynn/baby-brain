const { Event } = require('../models');

const eventData = [
  {
    action_id: 1,
    baby_id: 1,
    note: 'cbehcehcehhebhecbhechebc'
  },
  {
    action_id: 2,
    baby_id: 2,
    note: 'cbehcehcehhebhevwvcewbhechebc'
  },
  {
    action_id: 3,
    baby_id: 13,
    note: 'cbehcehcehhebhecbhechebc'
  }
]

const seedEvents = () => {
  Event.bulkCreate(eventData)
}
module.exports = seedEvents