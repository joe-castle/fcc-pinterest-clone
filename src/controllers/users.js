import { Router } from 'express';

import passport from '../strategies/twitter';

const users = Router();

users.get('/', (req, res) => {
  let user;

  if (process.env.NODE_ENV === 'development') {
    user = {
      id: '63993523',
      name: 'Joe Smith',
    };
  } else {
    user = req.user || {};
  }

  res.json(user);
});

users.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

users.get('/auth/twitter', passport.authenticate('twitter'));
users.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/',
}));

export default users;
