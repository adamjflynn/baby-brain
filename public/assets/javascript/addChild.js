async function addChild(event) {
    event.preventDefault();
  
    const eventInfo= document.querySelector('textarea[name="comment-body"]').value.trim();
    const eventid = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (event_text) {
      const response = await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
  