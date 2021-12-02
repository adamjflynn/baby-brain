const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');
const {Baby,Event,Parent} = require('../Models')

// router.get('/',withAuth, (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/assets/html/user.html')) 
    
// });

router.get('/',withAuth, async (req,res) => {
    Parent.findOne({where:{id:req.session.parent_id}},{
        include: [ Baby,
                   Event

        //   {
        //     model: Baby,
        //     include:[{model:Event}]
        //   }
        ]   
      })
      .then( async (dbParentData) =>{
          const parent = dbParentData.get({plain:true})
          console.log(parent)
          const babyData= await Baby.findAll({where:{parent_id:parent.id}})
          const baby = babyData.map(b=>b.get({plain:true}))
          console.log(baby)
          parent.baby=baby
          const eventData = await Event.findAll({where:{parent_id:parent.id}})
          const events = eventData.map(e=>e.get({plain:true}))
          parent.event = events
          res.render("user",events)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
})

router.get('/home',(req,res) => {
    res.render('login')
})


/*router.get('/', (req, res) => {
  Event.findAll({
    where: {
      parent_id: req.session.parent_id
    },
    attributes: [
      'id',
      'event_type',
      'note'
    ]
  })
    .then(dbEventData => {
      const events = dbEventData.map(event => event.get({ plain: true }));
      res.render('user', {
        events,
        loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});*/




module.exports = router;