



async function addEventFunction(event) {
  event.preventDefault();

  console.log('testevent1')

  const eventOptions = document.getElementById('event-type')
  const event_type = eventOptions.options[eventOptions.selectedIndex].value
  const baby_name = document.getElementById('childEvent').value
  console.log(baby_name)
  //var baby_id = [sequelize.literal('(SELECT id FROM Baby WHERE baby_name = ', baby_name,')')]
  //baby_id = baby_id[0].map(obj => obj.id)
  //console.log(baby_id)
  const note = document.querySelector('textarea[name="note"]').value.trim();

 
  if(note) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        event_type,
        note,
        baby_name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
   
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
 
  console.log('testevent2')
}

document.querySelector('#event-form').addEventListener('submit', addEventFunction)


