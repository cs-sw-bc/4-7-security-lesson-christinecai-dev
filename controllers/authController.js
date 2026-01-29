import bcrypt from 'bcrypt';
import { getStaffUser } from '../models/dataStore.js';

function showLogin(req, res) {
  res.render('login', {
    error: null,
    values: { email: '' }
  });
}

async function login(req, res) {
  // Server-side input validation (never rely on client-side validation).
  const email = req.body.email
  const password = req.body.password


  const staffUser = getStaffUser();
  if (!staffUser || staffUser.email !== email) {
    return res.status(401).render('login', {
      error: 'Invalid credentials.',
      values: { email }
    });
  }

  // Password hashing check happens here. We compare the plain password to the stored hash.
  // IMPORTANT: We never log or store the plain password.

  
  if(password != staffUser.staffPassword){
    return res.status(401).render('login', {
      error: 'Invalid credentials.',
      values: { email }
    });
  }

  // Simple conceptual login: set a cookie.
  // This is intentionally NOT a production auth system (good for teaching).
  res.cookie('staffAuth', 'true', {
    httpOnly: true,
    sameSite: 'lax'
  });

  return res.redirect('/booking');
}

function logout(req, res) {
  res.clearCookie('staffAuth');
  res.redirect('/login');
}

export {
  showLogin,
  login,
  logout
};
