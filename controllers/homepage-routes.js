const router = require('express').Router();
const path = require('path');
const withAuth = require('../utils/auth');
const {Baby,Event,Parent} = require('../models')

// router.get('/',withAuth, (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/assets/html/user.html')) 
    
// });

router.get('/',withAuth, async (req,res) => {
    Parent.findOne({where:{id:req.session.parent_id}},{
        include: [ 
                  // Baby,
                  //  Event

          {
            model: Event,
            include:[{model:Baby}]
          }
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
          const parent_name = req.session.parent_name
          const eventsData = events.map(event => {
            baby.forEach(b => {
              if (event.baby_id === b.id){
                event.baby_name = b.baby_name
              }
            })
            return event
          })
          const parent_id = req.session.parent_id

          
         parent.event = eventsData
          console.log(parent)
          res.render("user",parent)
          // res.render(user, {parent: {key: valuePair}})
          // res.render(user, [])

          /*
            {
              id: 9,
              username: 'azizahmed77',
              password: '$argon2id$v=19$m=4096,t=3,p=1$e6svQ9cqi2FKLtj36r4/rw$Yd9NIKBnojfwP+X8sHmmYxbZrpjgTn/w4aZMiVwvKig',
              createdAt: 2021-12-03T02:29:50.000Z,
              updatedAt: 2021-12-03T02:29:50.000Z
              baby: [Data frombaby DB]
              event:[Data from eventDB]
            }
          */
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
})

router.get('/home',(req,res) => {
    res.render('login')
})


router.get('/', (req, res) => {
  Event.findAll({
    where: {
      parent_id: req.session.parent_id
    },
    attributes: [
      'id',
      'event_type',
      'note',
     'created_at',
     'baby_name'
    ],
    include:[
      {model:Baby,
      attributes:['id','baby_name']}
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
});




module.exports = router;