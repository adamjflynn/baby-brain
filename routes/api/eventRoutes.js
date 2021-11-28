router.get('/', (req, res) => {
    Event.findAll({
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