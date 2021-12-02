async function addEventFunction(event) {
  event.preventDefault();

  console.log('testevent1')

  const eventOptions = document.getElementById('event-type')
  const eventType = eventOptions.options[eventOptions.selectedIndex].value.trim()
  const note = document.querySelector('textarea[name="note"]').value.trim();

 
  if(note) {
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        eventType,
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


