<template lang="pug">
header
  nav.navbar.navbar-toggleable-md.navbar-light.bg-faded
    button.navbar-toggler.navbar-toggler-right(data-toggle="collapse")
      span.navbar-toggler-icon
    
    a.navbar-brand Linkterest

    .collapse.navbar-collapse
      ul.navbar-nav.mr-auto
        li.nav-item 
          a.nav-link All
        li.nav-item(v-show="authed") 
          a.nav-link My Pics
        li.nav-item(v-show="authed") 
          a.nav-link Add a Pic

      span.navbar-text(v-show="authed") Hello Joe Smith
      a.btn.btn-primary(href="api/users/auth/twitter" v-show="!authed").
        Login with Twitter
      a.btn.btn-primary(href="" @click="logout" v-show="authed") Logout
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      authed: false,
    };
  },
  methods: {
    logout() {
      fetch('api/users/logout', { headers: { method: 'POST' } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li > a
  cursor pointer

.navbar-text
  margin-right 15px
</style>
