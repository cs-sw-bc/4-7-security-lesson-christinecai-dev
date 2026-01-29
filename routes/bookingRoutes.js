import express from 'express';
import { showBooking, submitBooking, showSuccess } from '../controllers/bookingController.js';

const router = express.Router();

router.get('/booking', showBooking);
router.post('/booking', submitBooking);
router.get('/booking/success/:id', showSuccess);

export default router;
