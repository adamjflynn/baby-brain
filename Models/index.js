const Baby = require("./baby");
const Action = require("./action");
const Parent = require('./parent');
const Event = require('./event');

// create associations
Parent.hasMany(Baby, {
    foreignKey: 'parent_id'
  });

  Baby.hasMany(Event, {
    foreignKey: 'baby_id'
  });

  Action.hasMany(Event, {
    foreignKey: 'action_id'
  });

  Baby.belongsTo(Parent, {
    foreignKey: 'parent_id'
  });

  Event.belongsTo(Baby, {
    foreignKey: 'baby_id'
  });

  Event.belongsTo(Action, {
    foreignKey: 'action_id'
  });

  module.exports = { Baby, Parent, Action, Event};