const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('Users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user));
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  // (accessToken, refreshToken, profile, done) => {
  async (accessToken, refreshToken, profile, done) => {
    // User.findOne({googleId: profile.id})
    //   .then(userExist => {
    //     userExist ?
    //       done(null, userExist)
    //       : new User({googleId: profile.id})
    //         .save()
    //         .then(user => done(null, user))
    //         .catch(console.log);
    //   });

    // async refactor
    const userExist = await User.findOne({googleId: profile.id});
    if (userExist) {
      return done(null, userExist);
    } else {
      const user = await new User({googleId: profile.id}).save();
      done(null, user);
    }

  }
));
