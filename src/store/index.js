import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pics: [{
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas', 'user'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'https://www.dreamhost.com/blog/wp-content/uploads/2015/10/DHC_blog-image-01-300x300.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://s3.amazonaws.com/libapps/accounts/33359/images/Clock-Images2.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.w3schools.com/css/trolltunga.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'https://www.dreamhost.com/blog/wp-content/uploads/2015/10/DHC_blog-image-01-300x300.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }, {
      id: 'test1',
      owner: '@owner1',
      ownerImg: 'https://pbs.twimg.com/profile_images/2482682568/iot58k6qksqctpfjlldr_normal.jpeg',
      url: 'http://www.w3schools.com/css/trolltunga.jpg',
      description: 'a pic by @owner1',
      votes: ['asd', '213', 'asdas'],
    }],
    authedUser: false,
  },
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
});

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./mutations', './actions'], () => {
    // require the updated modules
    /* eslint-disable global-require */
    // have to add .default here due to babel 6 module output
    const newMutations = require('./mutations').default;
    const newActions = require('./actions').default;
    /* eslint-disable global-require */
    // swap in the new actions and mutations
    store.hotUpdate({
      mutations: newMutations,
      actions: newActions,
    });
  });
}

export default store;
