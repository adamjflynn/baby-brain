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
      username: req.body.username
    }
  }).then(dbParentData => {
    if (!dbParentData) {
      res.status(400).json({ message: 'Username not found' });
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

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


router.put('/:id', (req, res) => {
Parent.update(req.body, {
  individualHooks: true,
  where: {
    id: req.params.id
  }
})
  .then(dbParentData => {
    if (!dbParentData) {
      res.status(404).json({ message: 'No parent found with this id' });
      return;
    }
    res.json(dbParentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
Parent.destroy({
  where: {
    id: req.params.id
  }
})
  .then(dbParentData => {
    if (!dbParentData) {
      res.status(404).json({ message: 'No parent found with this id' });
      return;
    }
    res.json(dbParentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
