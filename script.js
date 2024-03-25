document.getElementById('signupForm').addEventListener('submit', function(enter) {
  enter.preventDefault(); // Prevent the default form submission

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('errorMessage');

  if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
  } else {
      errorMessage.textContent = '';
      // Here you can add further form submission logic
      alert('Form submitted successfully!');
  }
});
