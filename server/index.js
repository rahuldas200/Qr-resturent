// const express = require('express');

// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

const QRCode = require('qrcode');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'de4i9omqz',
  api_key: '797628546344731',
  api_secret: 'lXggu4FkQyNHuA4QJCPS62DMaic'
});

// Text or data you want to encode in the QR code
const data = 'https://studynotion-delta.vercel.app';

// QR code options
const options = {
  errorCorrectionLevel: 'H',  // Error correction level: L (Low), M (Medium), Q (Quite Good), H (High)
  type: 'image/png',          // Image type: image/png, image/jpeg, etc.
  quality: 0.92,              // Image quality: 0 to 1
  margin: 1,                  // Margin around the QR code (in modules)
  scale: 4                    // Scaling factor for the QR code modules
};

// Generate QR code as a data URI with custom options
QRCode.toDataURL(data, options, (err, url) => {
  if (err) throw err;

  // Upload QR code to Cloudinary
  cloudinary.uploader.upload(url, {
    folder: 'qrcodes',  // Optional folder name in Cloudinary
    public_id: 'my_qrcode',  // Optional public ID in Cloudinary
    overwrite: true  // Overwrite existing file with the same name
  }, (error, result) => {
    if (error) {
      console.error('Error uploading to Cloudinary:', error);
    } else {
      console.log('QR code uploaded to Cloudinary:', result.secure_url);
    }
  });
});
