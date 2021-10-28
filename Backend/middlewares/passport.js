const passport = require("passport");

const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const fs = require('fs')
passport.use(passport.initialize());
passport.use(passport.session());
const privateKey = fs.readFileSync(__dirname+'/../config/private.key')

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: privateKey,
    },
    (payload, done) => {
      if (payload) {
        done(null, payload);
      } else {
		done(null, false);
      }
     
    }
  )
);

module.exports = passport;
