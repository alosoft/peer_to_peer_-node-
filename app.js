const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config/keys');
require('./model/User');
require('./services/passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');


const router = express();

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, 'public')));
router.use(
  cookieSession(({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  }))
);

router.use(passport.initialize());
router.use(passport.session());


const authRoutes = require('./routes/authRoute');
authRoutes(router);







module.exports = router;

// 982889951841-6upk0dr6da2kq4enmk81a7mm8hdrb8fr.apps.googleusercontent.com