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
    // TODO: remove quotes to access user
    owner: 'req.user.id',
    url: req.body.url,
    // TODO: remove quotes to access user
    description: req.body.description || `a pic by ${'req.user.displayName'}`,
    votes: [],
  };

  // save to redis
  picsActions.set(newPic.id, newPic);

  res.status(201).json(newPic);
});

pics.put('/vote/:id', ensureAuthenticated, (req, res) => {
  picsActions
    .get(req.params.id)
    .then((pic) => {
      if (!pic) return res.status(404).send(`Pic: ${req.params.id} does not exist.`);

      let votes;

      // if user has already voted, remove vote, otherwise add vote.
      // TODO: remove quotes to acces user
      if (pic.votes.includes('req.user.id')) {
        votes = pic.votes.filter(user => user !== 'req.user.id');
      } else {
        votes = [...pic.votes, 'req.user.id'];
      }

      const newPic = {
        ...pic,
        votes,
      };

      // save to redis
      picsActions.set(newPic.id, newPic);

      res.send(newPic);
    });
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
