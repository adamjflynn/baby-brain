const { Action } = require('../models');

const actionData = [
  {
    action: 'Diaper',
  },
  {
    action: 'Feeding',
  },
  {
    action: 'Sleep',
  },
  {
    action: 'Growth',
  },
  {
    action: 'Note',
  }

]

const seedActions = () => {
  Action.bulkCreate(actionData)
}
module.exports = seedActions