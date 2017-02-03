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

      button.btn.btn-primary Login with Twitter
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      authed: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
li > a
  cursor pointer
</style>
