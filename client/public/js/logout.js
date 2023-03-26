const logoutBtn = $('#logout');

// logout button handler
const logoutHandler = () => {
  fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => {
      document.location.replace('/');
    })
    .catch((err) => console.log(err));
}

logoutBtn.click(logoutHandler);