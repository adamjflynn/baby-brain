const router = require('express').Router();
const { Event, Baby } = require('../../models');
const withAuth = require('../../utils/auth');




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
    .then(dbeventData => res.json(dbeventData))
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
      note: req.body.note
  })
      .then(dbEventData => res.json(dbEventData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

