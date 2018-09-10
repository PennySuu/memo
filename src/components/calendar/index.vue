<template>
  <div class="canlendar">
      <ul class="canlendar-head">
        <li v-for="w in week" :key="w">{{w}}</li>
      </ul>
      <ul class="canlendar-body">
        <li v-for="(d,i) in days" :key="i" @click="onClickDay(d)" :class="{active: currentActiveDate === d.date&&currentMonth===d.month, disable: currentMonth!==d.month}" >{{d.date}}</li>
      </ul>
  </div>
</template>

<script>
const olympicMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const normalMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
export default {
  props: ['type'],
  data() {
    return {
      week: ['MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT', 'SUN'],
      days: [],
      currentActiveDate: new Date().getDate(),
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth()
    }
  },
  computed: {
    currentDay: function() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay()
    },
    month: function() {
      if (
        this.currentYear % 400 === 0 ||
        (this.currentYear % 4 === 0 && this.currentYear % 100 !== 0)
      ) {
        return olympicMonth
      }
      return normalMonth
    }
  },
  mounted: function() {
    const monthDays = this.month[this.currentMonth]

    this.days = Array(35)
      .fill(1)
      .map((v, i) => {
        if (i < this.currentDay - 1) {
          return {
            year:
              this.currentYear - 1 === 0
                ? this.currentYear - 1
                : this.currentYear,
            month: this.currentMonth - 1 === 0 ? 12 : this.currentMonth - 1,
            date:
              (this.currentMonth - 1 === 0
                ? 31
                : this.month[this.currentMonth - 1]) -
              this.currentDay +
              i +
              2
          }
        } else if (i - this.currentDay + 2 > monthDays) {
          return {
            year:
              this.currentMonth + 1 > 12
                ? this.currentYear + 1
                : this.currentYear,
            month: this.currentMonth + 1 > 12 ? 1 : this.currentMonth,
            date: i - monthDays - this.currentDay + 2
          }
        } else {
          return {
            year: this.currentYear,
            month: this.currentMonth,
            date: i - this.currentDay + 2
          }
        }
      })
  },
  methods: {
    onClickDay: function(i) {
      this.currentActiveDate = i.date
    }
  }
}
</script>

<style lang="stylus" scoped>
.canlendar {
  width: 100%;
  height: 100%;
  padding: 30px 0;

  li {
    color: #888ea8;
    text-align: center;
    width: 80px;
    line-height: 80px;
  }

  &-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);

    li {
      height: 80px;
      justify-self: center;

      &.active {
        border-radius: 50%;
        background-color: #35cbe8;
        color: #fff;
        font-weight: 700;
      }

      &.disable {
        color: #d4d5dc;
      }
    }
  }
}
</style>
