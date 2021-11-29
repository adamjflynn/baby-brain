const seedParents = require('./parent-seeds');
const seedBabies = require('./baby-seeds');
const seedEvents = require('./event-seeds');
const seedActions = require('./action-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedParents();
  console.log('--Parents Seeded--');

  await seedBabies();
  console.log('--Babies Seeded--');

  await seedEvents();
  console.log('--Events Seeded--');

  await seedActions();
  console.log('--Actions Seeded--');

  process.exit(0);
};

seedAll();