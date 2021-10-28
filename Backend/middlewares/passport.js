const passport = require("passport");

const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

passport.use(passport.initialize());
passport.use(passport.session());

passport.use(new JWTStrategy({jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),secretOrKey: 'id_key_account'},(payload, done) => {
    if (payload) {
				done(null, payload);
			} else done(null, false, {message: "Not found user."});
		},
	),
);


module.exports = passport;
