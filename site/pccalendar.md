# pc-calendar 日历
> pc端，目前不支持 v-model api 和wap端一样

## 基本

<br>
<br>
<br>
<p>
点击操作月份按钮： <button @click="prevDisabled = !prevDisabled">上月{{prevDisabled ? '禁' : '可'}}用</button>
<button @click="nextDisabled = !nextDisabled">下月{{nextDisabled ? '禁' : '可'}}用</button>
</p>
<p>
  <w-pc-calendar class="demo-calendar" :choicedDate="choicedDate" :disabledDate="disabledDate" :prevDisabled="prevDisabled" :nextDisabled="nextDisabled"></w-pc-calendar>
</p>

## API

#### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|weekText|周的文案|Array|否|['日', '一', '二', '三', '四', '五', '六']|
|monthText|头部月的文案|String|否|月|
|yearText|头部年的文案|String|否|年|
|animate|头部年和月数字是否动画|Boolean|否|false|
|animateTime|头部年和月数字动画的时间|Number|否|0.5|
|choiceText|已选状态的文案|String|否|已选|
|prevDisabled|上月切换按钮是否禁用|Boolean|否|无|
|nextDisabled|下月切换按钮是否禁用|Boolean|否|无|
|disabledDate|不可选择的日期|(currentDate: moment) => boolean|否|() => false|
|choicedDate|已选择的日期|(currentDate: moment) => boolean|否|() => false|
|change|点击选中的事件回调，返回 `当前日期时间戳` , `当前日期` , `当前月份` , `当前年份`|Function|否|() => {}|
|prev|点击上月的的回调，返回 `当前日期` , `当前月份` , `当前年份`|Function|否|() => {}|
|today|定位当前蓝色高亮选中|Date|否|new Date()|
|next|点击下月的的回调，返回 `当前日期` , `当前月份` , `当前年份`|Function|否|() => {}|

#### 事件

|事件名|说明|返回值|
|-----|---|-----|
|change|固定状态改变时触发的回调函数|当前定位类型|

<script>
import WPcCalendar from '../calendar/pccalendar/PcCalendar';
import {
  clearHours,
} from '../calendar/utils/date';

export default {
  data() {
    return {
      now: clearHours(new Date()),
      prevDisabled: false,
      nextDisabled: false,
    };
  },
  mounted() {
    document.getElementsByTagName('html')[0].className = 'html';
  },
  beforeDestroy() {
    document.getElementsByTagName('html')[0].className = '';
  },
  methods: {
    choicedDate(current, timestamp, day, year, month) {
      return day === 8;
    },
    disabledDate(current, timestamp, day, year, month) {
      return timestamp<this.now;
    },
  },
  components: {
    WPcCalendar,
  },
};
</script>
<style lang="scss">
@import '../calendar/pccalendar/style/pccalendar.scss';

.html {
  font-size: 37.5px;

  & .navbar {
    height: 34px;
    box-sizing: content-box;
    line-height: 34px;
    padding: 12px 24px;

    & a {
      line-height: 32px;
    }

    & .site-name {
      font-size: 30px;
    }

    & .links {
      right: 24px;
      top: 12px;
      line-height: 32px;
    }
  }

  & .sidebar {
    width: 16%;
    top: 57.6px;
  }

  & .page {
    padding-left: 16%;
  }

  & h1 {
    font-size: 42px;
  }

  & h2 {
    font-size: 38px;
  }

  & pre,
  & pre[class*="language-"] {
    padding: 20px 24px;

    &::before {
      font-size: 16px;
    }
  }

  & blockquote {
    font-size: 20px;
  }

  & .content code {
    padding: 4px 8px;
  }

  & .search-box input {
    height: 32px;
    width: 200px;
    padding: 0 8px 0 32px;
    background-size: 20px;
    background-position: 6px 6px;
  }

  .content:not(.custom) > h1:first-child, .content:not(.custom) > h2:first-child, .content:not(.custom) > h3:first-child, .content:not(.custom) > h4:first-child, .content:not(.custom) > h5:first-child, .content:not(.custom) > h6:first-child {
    margin-top: -0.75rem;
    padding-top: 2.3rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 419px) {
  .content:not(.custom) {
    padding: 0;
    width: 100%;
  }

  .page {
    padding-left: 0 !important;
  }

  .demo-calendar {
    width: 90%;
    margin: 0 auto;
  }
}

</style>
