<template>
  <a href="javascript:;" class="round-button" :class=" type"></a>
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

  &.add, &.ok {
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      content: '';
      display: block;
      width: 32px;
      height: 32px;
      background: url('~@/assets/images/add.png') center / 100% no-repeat;
    }
  }

  &.ok {
    &:before {
      width: 34px;
      height: 26px;
      background: url('~@/assets/images/ok.png') center / 34px 26px no-repeat;
    }
  }
}
</style>
