<template lang="pug">
#app.container-fluid
  Header
  Pics
</template>

<script>
import Header from './components/Header';
import Pics from './components/Pics';

export default {
  name: 'app',
  components: {
    Header,
    Pics,
  },
};
</script>

<style lang="stylus">
.container-fluid
  padding 0
</style>