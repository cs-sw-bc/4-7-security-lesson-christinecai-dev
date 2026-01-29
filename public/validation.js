
function validateLogin(e) {
  const email = document.querySelector('input[name="email"]').value.trim();
  const password = document.querySelector('input[name="password"]').value;
  const errorEl = document.getElementById('clientError');

  errorEl.textContent = '';

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

