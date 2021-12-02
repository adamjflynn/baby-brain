async function addEvent(event) {
    event.preventDefault();
  
    const eventType = document.querySelector('input[name="event-types"]').value;
    const note = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        eventType,
        note
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
    console.log('testevent')
  }
  
  document.querySelector('.add-event-form').addEventListener('submit', addEvent)

