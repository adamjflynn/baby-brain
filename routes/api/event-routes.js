const router = require('express').Router();
const { Event, Baby } = require('../../models');





router.get('/', (req, res) => {
    Event.findAll({
      attributes: ['id', 'baby_id', 'note', 'created_at'],
      include: [
        {
          model: Baby,
          attributes: ['baby_name']
  
        }
      ]   
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  Event.findOne({
    attributes: ['id', 'baby_id', 'note', 'created_at'],
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

router.post('/', (req, res) => {
  Event.create({
      note: req.body.note,
      action_id: req.body.action_id,
      baby_id: req.body.baby_id
  })
      .then(dbEventData => res.json(dbEventData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.delete('/:id', (req, res) => {
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