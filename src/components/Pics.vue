<template lang="pug">
section
  .grid
    .grid-item(v-for="pic in pics")
      .card
        img.card-img-top(:src="pic.url")
        .card-block
          p.card-text {{ pic.description }}
</template>

<script>
import { mapState } from 'vuex';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

export default {
  name: 'pics',
  mounted() {
    /* eslint-disable */
    const grid = document.querySelector('.grid');

    imagesLoaded(grid, () => {
      const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 200,
        gutter: 10,
      });
    })
  },
  computed: mapState({
    pics: state => state.pics,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
section
  width 1040px
  margin 20px auto
  text-align center

  // Adapt the size of the masonry grid to fit the maxmimum elements
  // This allows it to be centerd properly
  @media (max-width: 1039px)
    width 830px

  @media (max-width: 829px)
    width 620px

  @media (max-width: 619px)
    width 410px

  @media (max-width: 411px)
    width 200px

.grid-item
  width 200px
  margin-bottom 10px

.card-img-top
  width 100%
</style>
