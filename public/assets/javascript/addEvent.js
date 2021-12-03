async function addEventFunction(event) {
  event.preventDefault();

  console.log('testevent1')

  const eventOptions = document.getElementById('event-type')
  const event_type = eventOptions.options[eventOptions.selectedIndex].value
  const note = document.querySelector('textarea[name="note"]').value.trim();

 
  if(note) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        event_type,
        note
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


