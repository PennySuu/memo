<template>
  <div class="event-item">
    <div class="time">{{event.time}}</div>
    <div class="event-title">{{event.title}}</div>
    <div class="icon-right"></div>
  </div>
</template>

<script>
export default {
  props: ['event'],
  mounted() {
    console.log(this.event)
  }
}
</script>

<style lang="stylus" scoped>
.event-item {
  width: 100%;
  height: 120px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 8px 10px 3px rgba(36, 37, 38, 0.08);
  padding: 0 30px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .time, .icon-right {
    color: #888ea8;
  }
}
</style>
