document.getElementById('signupForm').addEventListener('submit', function(enter) {
  enter.preventDefault(); // Prevent the default form submission

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('errorMessage');

  if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
  } else {
      errorMessage.textContent = '';
      alert('Form submitted successfully!');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const clickLoginDiv = document.querySelector('.click-login');
  clickLoginDiv.addEventListener('click', function() {
      const loginFormHtml = `
          <div id="loginForm">
              <input type="text" id="username" name="username" placeholder="JohnDoe" required>
              <input type="password" id="loginPassword" name="loginPassword" placeholder="Password" required>
              <button type="submit">Login</button>
          </div>
      `;
      if (!document.getElementById('loginForm')) {
          document.querySelector('.form-section').innerHTML += loginFormHtml;
      }
  });
});
