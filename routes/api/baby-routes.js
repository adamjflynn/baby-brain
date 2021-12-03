const router = require('express').Router();
const { Baby, Parent, Event } = require('../../models');
const withAuth = require('../../utils/auth');



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

router.get('/:id', withAuth, (req, res) => {
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
        .then(dbBabyData => {
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

router.post('/', withAuth, (req, res) => {
    Baby.create({
        baby_name: req.body.baby_name,
        parent_id: req.session.parent_id
    })
        .then(dbBabyData => res.json(dbBabyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
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
