<template>
  <div class="empty">
    <div class="empty-image">
      <img src="@/assets/images/empty.png">
    </div>
    <h1>MEMO</h1>
    <p>Record the stories you encountered and the events that will be processed</p>
  <round-button type="add"/>
  </div>
</template>

<script>
import RoundButton from '@/components/round-button/'
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    RoundButton
  }
}
</script>

<style lang="stylus" scoped>
.empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #323061;

  &-image {
    width: 368px;
    height: 215px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    font-size: 40px;
    margin: 40px 0 30px;
  }

  p {
    margin: 0 95px;
    font-size: 28px;
  }
}
</style>
