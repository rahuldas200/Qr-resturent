const express = require('express');
const cors = require('cors')
const mongoose = require('./config/mongoose');
const {cloudinaryConnect} = require('./config/Cloudinay');
const fileUpload = require("express-fileupload");
const authRoute = require('./routes/Auth');
const manuRoute = require('./routes/Menu');
const tableRoute = require('./routes/Table');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;


mongoose.connect()
cloudinaryConnect();

const corsOptions = {
  origin: 'http://localhost:5173', // only allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  exposedHeaders: 'Content-Range,X-Content-Range',
  credentials: true // enable set cookie
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);


app.use('/api/v1/auth',authRoute);
app.use('/api/v1/menu',manuRoute);
app.use('api/v1/table',tableRoute);




app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


