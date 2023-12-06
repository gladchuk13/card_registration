const formSubmitButton = document.querySelector('.submit-button');

formSubmitButton.addEventListener('click', () => {
  const formEmail = document.querySelector('.form-email').value;
  const formPassword = document.querySelector('.form-password').value;

  if (formEmail === 'Admin' && formPassword === 'Admin') {
    console.log('Login successful');
    const allUsersData = JSON.parse(localStorage.getItem('allUsersData'));
    if (allUsersData) {
      console.log('Registered Users:');
      allUsersData.forEach((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`Email: ${user.email}`);
        console.log(`Password: ${user.password}`);
        console.log('');
      });
    } else {
      console.log('No registered users found.');
    }
  } else {
    console.log('Did not find user');
  }
});

formSubmitButton.addEventListener('click', () => {
  const formEmail = document.querySelector('.form-email').value;
  const formPassword = document.querySelector('.form-password').value;

  if (formEmail && formPassword) {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && formEmail === storedUserData.email && formPassword === storedUserData.password) {
      alert('Login successful');
      window.location.href = './index.html';
    } else {
      alert('Invalid email or password');
    }
  } else {
    alert('Please fill in all fields');
  }
});