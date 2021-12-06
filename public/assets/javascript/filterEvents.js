// async function filterEventsFunction(event) {
//     event.preventDefault();
  
//     console.log('testfilter1')
  
//     const event_type = document.getElementById('event-type-filter').value
//     const baby_id = document.getElementById('child-filter').value
//     console.log(event_type)
//     console.log(baby_id)
  
   
//     if(event_type && baby_id) {
//       const response = await fetch(`/api/events/`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           event_type,
//           baby_id
          
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
     
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
   
//     console.log('testfilter2')
//   }





// document.querySelector('#filter-form').addEventListener('submit', filterEventsFunction)