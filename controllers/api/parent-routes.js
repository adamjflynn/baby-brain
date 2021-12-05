const router = require('express').Router();
const { Parent, Baby } = require('../../models');
const withAuth = require('../../utils/auth');






router.get('/', withAuth, (req, res) => {
  
  Parent.findAll({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Baby,
        attributes: ['baby_name']
      },
      /*{
        model: Event,
        attributes: ['note']
      }*/
    ]
  })
    .then(dbParentData => res.json(dbParentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
  Parent.findOne({
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Baby,
        attributes: ['baby_name']
      },
      /*{
        model: Event,
        attributes: ['note']
      }*/
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
    .then(dbParentData => {
      req.session.save(() => {
        req.session.parent_id = dbParentData.id;
        req.session.parent_name = dbParentData.username;
        req.session.loggedIn = true;
        res.json({ user: dbParentData,
            parent_name: req.session.parent_name,
            parent_id: req.session.parent_id,
            message: 'You are now logged in!' });
      })
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  console.log("hello")
  Parent.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbParentData => {
    if (!dbParentData) {
      console.log("username Not found")
      res.status(400).json({ message: 'Username not found' });
      return;
    }
    dbParentData.checkPassword(req.body.password).then(correct => {
    if (!correct) {
      console.log("Password incorrect")
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }else{

    req.session.save(() => {
      req.session.parent_id = dbParentData.id;
      req.session.parent_name = dbParentData.username;
      req.session.loggedIn = true;
      res.json({ user: dbParentData,
          parent_name: req.session.parent_name,
          parent_id: req.session.parent_id, 
         message: 'You are now logged in!' });
    })
    }
  })
  });
});

router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


router.put('/:id', withAuth, (req, res) => {
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

router.delete('/:id', withAuth, (req, res) => {
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
