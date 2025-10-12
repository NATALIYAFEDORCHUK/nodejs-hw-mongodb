import { sendEmail } from './src/utils/sendMail.js';
import dotenv from 'dotenv';

dotenv.config();

sendEmail({
  to: 'fedorchuk1978nata@gmail.com',
  subject: 'Test Brevo SMTP connection',
  html: '<p>✅ If you see this — Brevo works fine!</p>',
})
  .then(() => console.log('✅ Email sent successfully'))
  .catch((err) => console.error('❌ Email error:', err));