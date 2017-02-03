import passport from 'passport';
import { Strategy } from 'passport-twitter';

import actions from '../db/actions';

const users = actions('users');

// _keys.json kept locally for twitter key and secret. Not included into git.
// Enviroment vairables set for production.
let keys;
try {
  keys = require('../_keys');
} catch (e) {
  keys = { twitterStrategy: {} };
}

passport.use(new Strategy(
  {
    consumerKey: process.env.TWITTER_KEY || keys.twitterStrategy.consumerKey,
    consumerSecret: process.env.TWITTER_SECRET || keys.twitterStrategy.consumerSecret,
    callbackURL: process.env.NODE_ENV === 'production'
      // TODO: Update to correct url
      ? 'http://fcc-nightlife2-app.herokuapp.com/api/users/auth/twitter'
      : 'http://localhost:3001/api/users/auth/twitter/callback',
  },
  (token, tokenSecret, profile, done) => {
    users
      .get(profile.id)
      .then((user) => {
        let newUser;

        if (!user) {
          newUser = {
            id: profile.id,
            displayName: profile.displayName,
            photo: profile.photos[0],
            ownPics: [],
          };

          // Save new user to redis.
          users.set(newUser.id, newUser);
        }

        done(null, user || newUser);
      });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  users
    .get(id)
    .then(user => done(null, user));
});

export default passport;
