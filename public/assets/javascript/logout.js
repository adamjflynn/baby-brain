async function logout() {
  const response = await fetch('/api/parents/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
  console.log("test");
}

document.querySelector('#logout').addEventListener('click', logout);