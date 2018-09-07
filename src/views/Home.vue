<template>
  <div class="home" >
    <empty/>
    <round-button type="add" v-on:on-click-round-button="onClickAddButton" />
  </div>
</template>

<script>
import Empty from '@/views/Empty'
import RoundButton from '@/components/round-button/'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClickAddButton: function() {
      this.$router.push('/addition')
    }
  },
  components: {
    Empty,
    RoundButton
  }
}
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
