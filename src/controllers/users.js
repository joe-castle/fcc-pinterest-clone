import { Router } from 'express';

import Users from '../models/Users';
import passport from '../strategies/twitter';

const users = Router();

users.post('/logout', (req, res) => {
  req.logout();
  res.end();
});

users.get('/auth/twitter', passport.authenticate('twitter'));
users.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/',
}));

export default users;
