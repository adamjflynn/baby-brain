const router = require('express').Router();
const { Event, Baby, Parent } = require('../../Models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');




router.get('/', (req, res) => {
    Event.findAll({
      attributes: ['createdAt','id','event_type', 'note','baby_id','baby_name'],
      include: [
        {
          model: Baby,
          attributes: ['baby_name','id']
        },
        {
          model: Parent,
          attributes: ['username']
  
        }
      ]   
    })
    .then(dbEventData =>{
      console.log(dbEventData)
       res.json(dbEventData)
    })
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
        model: Baby,
        attributes: ['baby_name']
      },

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

router.put('/', withAuth, (req, res) => {
  console.log("Post",req.body)
  Event.findOne({
    attributes: ['created_at','event_type', 'note'],
    include: [
      {
        model: Baby,
        attributes: ['baby_name']
      },
      {
        model: Parent,
        attributes: ['username']
      }
    ],
    where: {
      // id: req.params.id,
      baby_id: req.body.childFilter,
      event_type: req.body.eventFilter
      
    }
  })
      .then(dbEventData => res.json(dbEventData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.post('/', withAuth, (req, res) => {
  console.log("Post",req.body)
  Event.create({
      note: req.body.note,
      event_type: req.body.event_type,
      parent_id: req.session.parent_id,
      baby_id:req.body.baby_name
  
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