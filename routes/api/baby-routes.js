const router = require('express').Router();
const { Baby, Parent, Event } = require('../../models');



router.get('/', (req, res) => {
    Baby.findAll({
        include: [
            {
                model: Parent,
                attributes: ['username']
            },
            {
                model: Event,
                attributes: ['note']
            }
        ]
    })
        .then(dbBabyData => res.json(dbBabyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Baby.findOne({
        include: [
            {
                model: Parent,
                attributes: ['username']
            },
            {
                model: Event,
                attributes: ['note']
            }
        ],
        where: {
            id: req.params.id
        }
    })
        .then(dbbabyData => {
            if (!dbBabyData) {
                res.status(404).json({ message: 'No Matches' });
                return;
            }
            res.json(dbBabyData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Baby.create({
        baby_name: req.body.baby_name,
        parent_id: req.body.parent_id
    })
        .then(dbBabyData => res.json(dbBabyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Baby.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBabyData => {
        if (!dbBabyData) {
          res.status(404).json({ message: 'No baby found with this id' });
          return;
        }
        res.json(dbBabyData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

module.exports = router;
