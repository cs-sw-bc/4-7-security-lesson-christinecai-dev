import { getStaffUser, createAppointment, getAppointmentById } from '../models/dataStore.js';

function requireStaffLogin(req, res) {
  const isLoggedIn = req.cookies.staffAuth === 'true';
  if (!isLoggedIn) {
    res.redirect('/login');
    return false;
  }
  return true;
}



function showBooking(req, res) {
  if (!requireStaffLogin(req, res)) return;

  res.render('booking', {
    errors: [],
    values: {
      clientName: '',
      clientEmail: '',
      serviceType: '',
      date: '',
      timeSlot: '',
      notes: ''
    }
  });
}

function submitBooking(req, res) {
  if (!requireStaffLogin(req, res)) return;

  // IMPORTANT: Do NOT trust extra client-sent fields.
  // We only pick the fields we explicitly allow.
  const values = {
    clientName: req.body.clientName,
    clientEmail: req.body.clientEmail,
    serviceType: req.body.serviceType,
    date: req.body.date,
    timeSlot: req.body.timeSlot,
    notes: req.body.notes
  };
  const appointment = createAppointment({
    clientName: values.clientName,
    clientEmail: values.clientEmail,
    serviceType: values.serviceType,
    date: values.date,
    timeSlot: values.timeSlot,
    notes: values.notes
  });

  return res.redirect(`/booking/success/${appointment.id}`);
}

function showSuccess(req, res) {
  if (!requireStaffLogin(req, res)) return;

  const id = Number(req.params.id);
  const appointment = getAppointmentById(id);

  if (!appointment) {
    return res.status(404).send('Appointment not found');
  }

  // EJS uses escaping by default with <%= %>, which is helpful for safe display.
  res.render('booking-success', { appointment });
}

export {
  showBooking,
  submitBooking,
  showSuccess
};
