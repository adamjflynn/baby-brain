
const {Parent} = require('../models')

const parentData = [
  {
    username: 'jim jones',
    password: '673nsmhsbs'
  },
  {
    username: 'jeff jim',
    password: '873ndi78hsmhsbs'
  },
  {
    username: 'billy bob',
    password: '235ehsjwbs'
  },
  {
    username: 'earl jenkins',
    password: '34562nsmhsbs'
  }

]

const seedParents = () => Parent.bulkCreate(parentData)



module.exports = seedParents