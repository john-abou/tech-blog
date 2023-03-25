// Login Form handler
const loginFormHandler = async (event) => {
    event.preventDefault();
  
  
    const user_email = $('#email-login').val().trim();
    const user_ps = $('#password-login').val().trim();
  
  
    if (user_email && user_ps) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ 
            email: user_email, 
            password: user_ps 
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? await response.json() : null;
  
  
        $('#login-email').html (data.message);
        //alert('Failed to log in.');
      }
    }
};

// Signup Form Handler
const signupFormHandler = async (event) => {
event.preventDefault();

const user_email = $('#email-signup').val().trim();
const user_ps = $('#password-signup').val().trim();
const user_name = $('#name-signup').val().trim();

if (user_name && user_email && user_ps) {
    const response = await fetch('/api/user/signup', {
    method: 'POST',
    body: JSON.stringify({ 
        name: user_name, 
        email: user_email, 
        password: user_ps 
    }),
    headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
    document.location.replace('/homepage');
    } else {
    const isJson = response.headers.get('content-type').includes('application/json');
    const data = isJson ? await response.json() : null;
    alert('Failed to sign up.');
    }
}
};
  
  
// Event listeners for the forms
$('#login-btn').click(loginFormHandler);
$('#signup-btn').click(signupFormHandler);
  