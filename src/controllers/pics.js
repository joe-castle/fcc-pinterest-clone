import { Router } from 'express';
import { isUri } from 'valid-url';
import { generate } from 'shortid';
import { ensureAuthenticated } from '../middleware';

import actions from '../db/actions';

const pics = Router();
const picsActions = actions('pics');

pics.post('/add', ensureAuthenticated, (req, res) => {
  if (!isUri(req.body.url)) {
    return res
      .status(400)
      .send('The provided URL is invalid, please check and try again.');
  }

  const newPic = {
    id: generate(),
    url: req.body.url,
    description: req.body.description || `a pic by ${'req.user.displayName'}`,
  };

  // save to redis
  picsActions.set(newPic.id, newPic);

  res.status(201).json(newPic);
});

pics.delete('/:id', ensureAuthenticated, (req, res) => {
  picsActions
    .del(req.params.id)
    .then((deleted) => {
      if (deleted) {
        res.send(`Pic with id: '${req.params.id}' deleted.`);
      } else {
        res.send('That pic doesn\'t exist');
      }
    });
});

export default pics;
