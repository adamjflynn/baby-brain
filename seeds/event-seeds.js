const { Event } = require('../Models');

const eventData = [
  {
    event_type: 'Nursing',
    parent_id: 1,
    baby_id: 1,
    note: 'cbehcehcehhebhecbhechebc'
  },
  {
    event_type: 'Feeding',
    parent_id: 2,
    baby_id: 2,
    note: 'cbehcehcehhebhevwvcewbhechebc'
  },
  {
    event_type: 'Sleeping',
    parent_id: 3,
    baby_id: 3,
    note: 'cbehcehcehhebhecbhechebc'
  },
  {
    event_type: 'Diaper Changing',
    parent_id: 4,
    baby_id: 4,
    note: 'pooped alot'
  }
]

const seedEvents = () => Event.bulkCreate(eventData)

module.exports = seedEvents