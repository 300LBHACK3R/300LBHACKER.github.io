// This callback submits the form once reCAPTCHA verifies the user.
function onSubmit(token) {
  document.getElementById('contact-form').submit();
}
