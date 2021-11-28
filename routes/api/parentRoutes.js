const router = require('express').Router();
const { Parent, Baby } = require('../../models');




router.get('/', (req, res) => {
  
  Parent.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Baby,
        attributes: ['baby_name']
      }
    ]
  })
    .then(dbParentData => res.json(dbParentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Parent.findOne({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Baby,
        attributes: ['baby_name']
      }
    ],
    where: {
      id: req.params.id
    }
  })
    .then(dbParentData => {
      if (!dbParentData) {
        res.status(404).json({ message: 'No Matches' });
        return;
      }
      res.json(dbParentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
 
  Parent.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbParentData => res.json(dbParentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  
  Parent.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbParentData => {
    if (!dbParentData) {
      res.status(400).json({ message: 'Email address not found' });
      return;
    }

    const correctPassword = dbParentData.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }

    res.json({ user: dbParentData, message: 'You are now logged in!' });
  });
});

