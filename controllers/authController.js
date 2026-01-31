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
  //sanitizing by removing all empty spaces, new line characters
  //if needed, you can normalize (make everything look uniform)
  const email = (req.body.email || '').trim().toLowerCase();
  //never santitize password
  const password = req.body.password || '';

  if(!email || !password){
    return res.status(401).render('login', {
      error: 'Email and password are mandatory.'
  });
}
  if (!/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/.test(email)){
    return res.status(401).render('login', {
      error: 'Email must be properly formatted.'
  });
}

  const staffUser = getStaffUser();
  if (!staffUser || staffUser.email !== email) {
    return res.status(401).render('login', {
      error: 'Invalid credentials.',
      values: { email }
    });
  }

  // Password hashing check happens here. We compare the plain password to the stored hash.
  // IMPORTANT: We never log or store the plain password.
  //cipher is any encrypted message
  //1. one way: can be encrypted and not be decrypted (passwords) e.g. hashing 2. two-way: encode and decode
  //use hashfunction


  //compare

  const valid = await bcrypt.compare(password, staffUser.passwordHash);
  //output would be true if the hash(user password) == passwordHash in our database
  //output will be false
  
  if(!valid){
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
