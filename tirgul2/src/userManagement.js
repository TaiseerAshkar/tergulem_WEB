const welcome = document.getElementById('welcome');
const usersTable = document.getElementById('usersTable');

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const users = JSON.parse(localStorage.getItem('users')) || [];

welcome.textContent = currentUser ? `Welcome ${currentUser.username}` : 'Welcome (not logged in)';

// show every user's details — never the password
users.forEach(u => {
  const row = document.createElement('tr');
  [u.username, u.fullName, u.email, u.dob, u.role].forEach(value => {
    const cell = document.createElement('td');
    cell.className = 'p-3 border';
    cell.textContent = value ?? '';
    row.appendChild(cell);
  });
  usersTable.appendChild(row);
});
