<template lang="pug">
#app.container-fluid
  Header
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header,
  },
};
</script>

<style lang="stylus">
.container-fluid
  padding 0
</style>