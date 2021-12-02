async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('.username').value.trim();
  const password = document.querySelector('.password').value.trim();

  if (username && password) {
    const response = await fetch('/api/parents/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('./html/user.html');
    } else {
      alert(response.statusText);
    }
  }
  console.log("test1122221");
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('.username').value.trim();
  const password = document.querySelector('.password').value.trim();

  if (username && password) {
    const response = await fetch('/api/parents', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('./html/user.html');
    } else {
      alert(response.statusText);
    }
  }
  console.log("test");
}

document.querySelector('#login').addEventListener('click', loginFormHandler);

document.querySelector('#create').addEventListener('click', signupFormHandler);
