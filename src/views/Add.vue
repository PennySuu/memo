<template>
  <div class="add">
    <div class="add-head">
      <div class="close icon-close"></div>
      <div class="date">{{month[currentMonth]}} {{currentYear}}</div>
      <div class="switch">
        <div class="item icon-left"></div>
        <div class="item icon-right"></div>
      </div>
    </div>
    <div class="add-body">
      <canlendar/>
      <event-item v-for="(event,index) in events" :event="event" :key="index" />
    </div>
    <round-button type="check" />
  </div>
</template>

<script>
import Canlendar from '@/components/calendar'
import RoundButton from '@/components/round-button/'
import EventItem from '@/components/event-item/'
export default {
  name: 'Add',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      olympicMonth: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      normalMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      events: [
        { time: '10:30', title: 'Organize a meeting' },
        { time: '13:30', title: 'Report the results' }
      ]
    }
  },
  components: {
    Canlendar,
    RoundButton,
    EventItem
  }
}
</script>

<style lang="stylus" scoped>
.add {
  width: 100%;
  height: 100%;
  background-color: #fbfbff;

  &-head {
    padding: 0 30px;
    background-color: #fff;
    font-size: 32px;
    height: 95px;
    line-height: 95px;
    display: flex;
    justify-content: space-between;

    .close {
      display: flex;
      align-items: center;
      height: 100%;
      font-size: 40px;
      width: 100px;
    }

    .date {
      flex: 1;
      text-align: center;
    }

    .switch {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 120px;

      .item {
        font-size: 40px;
      }
    }
  }

  &-body {
  }
}
</style>
