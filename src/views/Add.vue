<template>
  <div class="add">
    <div class="add-head">
      <div class="close"></div>
      <div class="date">{{month[currentMonth]}} {{currentYear}}</div>
      <div class="switch">
        <div class="item left"></div>
        <div class="item right"></div>
      </div>
    </div>
    <div class="add-body">
      <canlendar/>
    </div>
  </div>
</template>

<script>
import Canlendar from "@/components/calendar";
export default {
  name: "Add",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      olympicMonth: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      normalMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  components: {
    Canlendar
  }
};
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

      &:before {
        content: '';
        display: block;
        width: 22px;
        height: 22px;
        background: url('~@/assets/images/close.png') center / 100% no-repeat;
      }
    }

    .switch {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90px;

      .item {
        &:before {
          content: '';
          display: block;
          width: 15px;
          height: 26px;
        }
      }

      .left {
        &:before {
          background: url('~@/assets/images/left.png') center / 100% no-repeat;
        }
      }

      .right {
        &:before {
          background: url('~@/assets/images/right.png') center / 100% no-repeat;
        }
      }
    }
  }

  &-body {
  }
}
</style>
