
function validateLogin(e) {
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="password"]').value;
  const errorEl = document.getElementById('clientError');

  errorEl.textContent = '';
//if the user provided some email/password
  if(!email || !password){
    e.preventDefault();//stop the behavior of the form being submitted to the server prematurely (check the conditions first)
    errorEl.textContent = 'Email and password are mandatory';
    return false;
  }

  if (!email.lenth>100){
    e.preventDefault();
    errorEl.textContent = 'Email cannot be greater than 100 characters';
    return false;
  }

  //email fromat -REGEX-- regular expression
  //absd123@gmail.com

  if (!/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/.test(email)){
    e.preventDefault();
    errorEl.textContent = 'Please type the email with the proper format';
    return false;
  }


  return true;
}

function validateBooking(e) {
  const name = document.querySelector('input[name="clientName"]').value.trim();
  const email = document.querySelector('input[name="clientEmail"]').value.trim();
  const serviceType = document.querySelector('select[name="serviceType"]').value;
  const date = document.querySelector('input[name="date"]').value;
  const timeSlot = document.querySelector('select[name="timeSlot"]').value;
  const notes = document.querySelector('textarea[name="notes"]').value.trim();
  const errorEl = document.getElementById('clientError');

  errorEl.textContent = '';

  return true;
}

