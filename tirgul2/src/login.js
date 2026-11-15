const html = document.documentElement;
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const usernameOrEmail = document.getElementById('userInput').value;
  const password = document.getElementById('passInput').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];

  // find a user by username OR email
  let user = users.find(u => u.username === usernameOrEmail || u.email === usernameOrEmail);

  if (user != undefined && password === user.password) {
    // (b) save the logged-in user's details (without the password)
    const { password: _hidden, ...loggedInUser } = user;
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser));

    loginMessage.textContent = 'Login successful!';
    loginMessage.classList.remove('text-red-500');
    loginMessage.classList.add('text-green-500');

    // (d) admins go to the user management page
    if (user.role === 'admin') {
      window.location.href = '/src/userManagement.html';
    }
  } else {
    loginMessage.textContent = 'Invalid username/email or password.';
    loginMessage.classList.remove('text-green-500');
    loginMessage.classList.add('text-red-500');
  }
});
