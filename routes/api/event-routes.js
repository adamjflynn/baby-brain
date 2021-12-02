const router = require('express').Router();
const { Event, Baby, Parent } = require('../../models');
const withAuth = require('../../utils/auth');





router.get('/', withAuth, (req, res) => {
    Event.findAll({
      attributes: ['id','event_type', 'note'],
      include: [
        {
          model: Parent,
          attributes: ['username']
  
        }
      ]   
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

router.get('/:id', withAuth, (req, res) => {
  Event.findOne({
    attributes: ['created_at','event_type', 'note'],
    include: [
      {
        model: Parent,
        attributes: ['username']
      }
    ],
    where: {
      id: req.params.id
    }
  })
    .then(dbEventData => {
      if (!dbEventData) {
        res.status(404).json({ message: 'No Matches' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Event.create({
      note: req.body.note,
      event_type: req.body.event_type,
    
      
  })
      .then(dbEventData => res.json(dbEventData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.delete('/:id', withAuth, (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbEventData => {
      if (!dbEventData) {
        res.status(404).json({ message: 'No event found with this id' });
        return;
      }
      res.json(dbEventData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;