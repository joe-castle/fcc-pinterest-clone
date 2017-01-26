<template lang="pug">
#app
  img(src="./assets/logo.png")
  hello
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin-top 60px
</style>