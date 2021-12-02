async function addEventFunction(event) {
  event.preventDefault();

  const eventType = document.querySelector('select[name="event-type').options.selectedIndex.text
  const note = document.querySelector('textarea[name="note"]').value.trim();
 
  if(eventType || note) {
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
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
 
  console.log('testevent')
}

document.querySelector('#event-note-form').addEventListener('submit', addEventFunction)


