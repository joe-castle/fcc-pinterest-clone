<template lang="pug">
header
  nav.navbar.navbar-toggleable-md.navbar-light.bg-faded
    button.navbar-toggler.navbar-toggler-right(type="button" data-toggle="collapse")
      span.navbar-toggler-icon
    
    a.navbar-brand Linkterest

    .collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item 
          a.nav-link(@click="updateViewPicsById('')") All
        li.nav-item(v-show="userId") 
          a.nav-link(@click="updateViewPicsById(userId)") My Pics
        li.nav-item(v-show="userId")
          a.nav-link Add a Pic

      span.navbar-text(v-show="userId") Hello {{ userName }}
      a.btn.btn-primary(href="api/users/auth/twitter" v-show="!userId").
        Login with Twitter
      a.btn.btn-primary(href="" @click.prevent="logout" v-show="userId") Logout
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'hello',
  methods: {
    ...mapMutations(['updateViewPicsById']),
    logout() {
      fetch('api/users/logout', { headers: { method: 'POST' } });
      this.$store.commit('updateUser');
    },
  },
  computed: mapState({
    userName: state => state.authedUser.name,
    userId: state => state.authedUser.id,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li > a
  cursor pointer

.navbar-text
  margin-right 15px
</style>
