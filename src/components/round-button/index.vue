<template>
  <div :class="`round-button icon-${type}`" v-on:click="$emit('on-click-round-button')"></div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style lang="stylus" scoped>
.round-button {
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 105px;
  height: 105px;
  border-radius: 50%;
  box-shadow: 0 10px 20px 3px rgba(36, 37, 38, 0.08);
  z-index: 99;

  &.icon-add, &.icon-check {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
  }
}
</style>
