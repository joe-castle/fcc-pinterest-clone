import { generate } from 'shortid';

import actions from '../db/actions';

const users = actions('users');

class Users {
  static get(id) {
    return id
      ? users.get(id).then(user => user && new Users(user))
      : users.getAll();
  }

  static findByEmail(email) {
    return users
      .getAll()
      .then(users => {
        if (!users) return false;

        const user = users.find(user => user.email === email);

        if (!user) return false;

        return new Users(user);
      });
  }

  constructor({
    id = generate(),
    name,
    email,
    password,
    city = '',
    state = '',
    ownBooks = [],
    outboundTradeRequests = [],
    inboundTradeRequests = [],
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.city = city;
    this.state = state;
    this.ownBooks = ownBooks;
    this.outboundTradeRequests = outboundTradeRequests;
    this.inboundTradeRequests = inboundTradeRequests;
  }

  encryptPassword(password) {
    this.password = bcrypt.hashSync(password || this.password, 10);

    return this;
  }

  save() {
    return users.set(this.id, this);
  }

  update({ password, city, state, ownBooks, outboundTradeRequests, inboundTradeRequests }) {
    this.city = city || this.city;
    this.state = state || this.state;
    this.ownBooks = ownBooks || this.ownBooks;
    this.outboundTradeRequests = outboundTradeRequests || this.outboundTradeRequests;
    this.inboundTradeRequests = inboundTradeRequests || this.inboundTradeRequests;

    if (password) this.encryptPassword(password);

    return this;
  }

  exclude(toExclude) {
    const exclude = toExclude.split(' ');

    return Object
      .keys(this)
      .reduce((prev, curr) => {
        if (exclude.includes(curr)) {
          return prev;
        }

        return {
          ...prev,
          [curr]: this[curr],
        };
      }, {});
  }
}

export default Users;
