const Baby = require("./baby");
const Parent = require('./parent');
const Event = require('./event');

// create associations
Parent.hasMany(Baby, {
    foreignKey: 'parent_id'
  });

  Baby.hasMany(Event, {
    foreignKey: 'baby_id'
  });

  Baby.belongsTo(Parent, {
    foreignKey: 'parent_id'
  });

  Event.belongsTo(Baby, {
    foreignKey: 'baby_id'
  });


  module.exports = { Baby, Parent, Event};