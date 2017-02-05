<template lang="pug">
section
  #grid
    .grid-item(v-for="pic in pics")
      .card
        img.card-img-top(:src="pic.url")
        .card-block
          p.card-text {{ pic.description }}
        .card-block
          img(:src="pic.ownerImg", @click="updateViewPicsById(pic.owner)")
          .votes(:class="{ voted: userVoted(pic) }")
            i.material-icons {{ userVoted(pic) ? 'favorite' : 'favorite_border' }}
            span {{ pic.votes.length }}

</template>

<script>
import { mapState, mapMutations } from 'vuex';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

export default {
  name: 'pics',
  updated() {
    const grid = document.getElementById('grid');

    imagesLoaded(grid, () => {
      /* eslint-disable no-new */
      new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 200,
        gutter: 10,
      });
      /* eslint-disable no-new */
    });
  },
  methods: {
    ...mapMutations(['updateViewPicsById']),
    userVoted(pic) {
      return pic.votes.includes(this.userId);
    },
  },
  computed: mapState({
    pics: state => (
      state.viewPicsById
        ? state.pics.filter(pic => pic.owner === state.viewPicsById)
        : state.pics
    ),
    userId: state => state.authedUser.id,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
section
  width 1040px
  margin 20px auto

  // Adapt the size of the masonry grid to fit the maxmimum elements
  // This allows it to be centered properly
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

.card
  border 0
  box-shadow 0 1px 4px 0 rgba(0,0,0,0.37);
  transition box-shadow .1s ease-in-out

  &:hover
    box-shadow 0 2px 2px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.3)

.card-img-top
  width 100%

.card-block
  border-top 1px solid rgba(0,0,0,.125)

.card .card-block:nth-child(3)
  padding 5px 10px
  display flex
  justify-content space-between
  align-items center

  img
    border-radius 5px
    
    &:hover
      cursor pointer
    
  .votes
    border 1px solid rgba(0,0,0,.125)
    border-radius 5px
    padding 2.5px 10px
    display flex
    align-items center
    cursor pointer
    transition all .1s ease-in-out

    i
      margin-right 5px

    &.voted
      color #0275d8

    @keyframes pop
      0%
      100%
        transform scale(1)
      70%
        transform scale(1.2)

    &:hover
      background alpha(#0275d8, .3)
      animation pop .1s ease-in-out

</style>
