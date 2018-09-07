<template>
  <div class="canlendar">
      <ul class="canlendar-head">
        <li v-for="w in week" :key="w">{{w}}</li>
      </ul>
      <ul class="canlendar-body">
        <li v-for="(d,i) in days" :key="i" >{{d}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      week: ['MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT', 'SUN'],
      days: []
    }
  },
  mounted: function() {
    this.days = Array(35)
      .fill(1)
      .map((v, i) => i + 1)
  }
}
</script>

<style lang="stylus" scoped>
.canlendar {
  width: 100%;
  height: 100%;
  padding: 45px 0;

  li {
    color: #888ea8;
    text-align: center;
    width: 80px;
  }

  &-head {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  &-body {
    display: flex;
    flex-wrap: wrap;

    li {
      height: 80px;
      line-height: 80px;
      margin: 0 calc(((100% / 7 - 80px) / 2));
      flex: auto;

      .active {
        border-raduis: 50%;
        background-color: #35cbe8;
        color: #fff;
        font-weight: 700;
      }
    }
  }
}
</style>
