const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Set Content-Type for JavaScript files
app.get('*.js', function (req, res, next) {
  res.set('Content-Type', 'text/javascript');
  next();
});

// Configure the Mailgun SMTP transport
const transporter = nodemailer.createTransport(smtpTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: 'postmaster@sandbox7f6e63e70cce483491050af6ad4de305.mailgun.org', // Replace with your Mailgun SMTP username
    pass: 'c19c5a632b72c796218cb23334f7ce4c-a4da91cf-337b3628' // Replace with your Mailgun SMTP password
  }
}));

app.post('/book-appointment', async (req, res) => {
  const bookingData = req.body;
  console.log('Booking Data:', bookingData);
  
  const requiredFields = ['user_id', 'email_id', 'service_id', 'booking_date', 'booking_time'];

  // Check if all required fields are present
  const missingFields = requiredFields.filter(field => !bookingData[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({
      success: false,
      message: `All fields are required: ${missingFields.join(', ')}`
    });
  }

  const mailOptions = {
    from: 'elijahnzeli924@gmail.com', // Replace with your preferred "from" email address
    to: 'cruseiliana@gmail.com', // Replace with the recipient email address
    subject: 'New Appointment Booking',
    text: `New appointment booked:\n\n
             Name: ${bookingData.name}\n
             Email: ${bookingData.email}\n
             Service: ${bookingData.service}\n
             Date: ${bookingData.date}\n
             Time: ${bookingData.time}`
    // Optionally, you can use HTML formatting instead of plain text
    // html: `<p>New appointment booked:</p>
    //        <p><strong>Name:</strong> ${bookingData.name}</p>
    //        <p><strong>Email:</strong> ${bookingData.email}</p>
    //        <p><strong>Date:</strong> ${bookingData.date}</p>
    //        <p><strong>Time:</strong> ${bookingData.time}</p>
    //        <p><strong>Service:</strong> ${bookingData.service}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error booking appointment' });
  }
});

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});