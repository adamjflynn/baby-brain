async function saveBaby(event) {
  event.preventDefault();

  const baby_name = document.querySelector('#child_name').value.trim();

  if (baby_name) {
    const response = await fetch('/api/babies', {
      method: 'post',
      body: JSON.stringify({
        baby_name
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  console.log("test1122221");
}

document.querySelector('#addChild').addEventListener('click', saveBaby);

async function addEventFunction(event) {
  event.preventDefault();

  const eventType = document.querySelector('#event-type').value;
  const notes = document.querySelector('#notes').value;

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
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
  console.log('testevent')
}

document.querySelector('#addEvent').addEventListener('submit', addEventFunction)
