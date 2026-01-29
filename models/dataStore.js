let staffUser = null;

const appointments = [];
let nextAppointmentId = 1;

function setStaffUser(user) {
  staffUser = user;
}

function getStaffUser() {
  return staffUser;
}

function createAppointment(appointment) {
  const record = {
    id: nextAppointmentId,
    ...appointment
  };

  nextAppointmentId += 1;
  appointments.push(record);

  return record;
}

function getAppointmentById(id) {
  return appointments.find((a) => a.id === id);
}

export {
  setStaffUser,
  getStaffUser,
  createAppointment,
  getAppointmentById,
  appointments
};
