async function filterEventsFunction(event) {
    event.preventDefault();
  
    console.log('testfilter1')
  
    const eventFilter = document.getElementById('event-type-filter').value
    const childFilter = document.getElementById('child-filter').value
    console.log(childFilter)
    console.log(eventFilter)
  
   
    if(eventFilter && childFilter) {
      const response = await fetch(`/api/events/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventFilter,
          childFilter
        })
      })
     
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
   
    console.log('testfilter2')
  }





document.querySelector('#filter-form').addEventListener('submit', filterEventsFunction)