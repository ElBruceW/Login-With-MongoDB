const passport = require("passport");
const { Strategy } = require("passport-local");
const Usuario = require("../server/models/Usuario.js");
const bcrypt = require("bcrypt");

passport.use(
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async function (username, password, done) {
      var user = await Usuario.findOne({
        where: {
          username: username,
        },
      });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const comparar = password === user.password
      console.log(comparar);
      if (comparar == false) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await Usuario.findOne({ where: { id: id } });
  return done(null, user);
});

module.exports = passport;
