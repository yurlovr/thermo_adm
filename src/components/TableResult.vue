  <template>
  <div class="container"
      :class="{'no-result': !result.length}"
  >
    <div class="overlay" v-if="fullImage"/>
    <FullImage v-if="fullImage"
          :close="closeImage"
          :urlImage="fullImageUrl"
    />
    <p class="header">
      Результаты
    </p>
    <section class="buttons">
      <button class="button button_main" id="all" @click="setMeasurement">Все измерения / Обновить</button>
      <button class="button button_main" id="d" @click="setMeasurement">Текущий день</button>
      <button class="button button_main" id="w" @click="setMeasurement">Текущая неделя</button>
      <button class="button button_main" id="m" @click="setMeasurement">Текущий месяц</button>
      <button class="button button_main" id="y" @click="setMeasurement">Предыдущий день</button>
    </section>
    <div  v-if="!result || !result.length"
          class="result_no"
    >
      Результаты измерений отсутсвуют
    </div>
    <div v-else
        class="result_yes"
    >
    <table class="table">
      <thead>
        <tr class="table__row-head">
          <th class="table__cell table__cell-dateh">Дата</th>
          <th class="table__cell table__cell">Время</th>
          <th class="table__cell table__cell-photo">Фото</th>
          <th class="table__cell table__cell">Температура</th>
          <th class="table__cell table__cell-status">Статус</th>
        </tr>
      </thead>
        <tbody>
        <tr class="table__row" :class="{'one': result.length === 1}" v-for="item in arrayForRender()" :key="item.id">
          <td class="table__cell table__cell-date">{{getDate(item.id)}}</td>
          <td class="table__cell table__cell-time">{{getTime(item.id)}}</td>
          <td class="table__cell table__cell-image">
            <img class="image" :src="item.image" width="50" height="50" @click="imageUrl(item.image)"/>
          </td>
          <td class="table__cell table__cell-temp">{{item.temp}}&nbsp;<span class="temp_deg">&#176;C</span></td>
          <td class="table__cell table__cell-status"
              :class="{'good': item.status === 2,
                        'bad': item.status === 1,
                        'low': item.status === 0}"
          >{{getStatus(item.status)}}</td>
        </tr>
      </tbody>
    </table>
    <paginate
      :page-count="Math.ceil(result.length / 8)"
      :page-range="2"
      :prev-text="'Prev'"
      :click-handler="clickCallback"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page'"
      :next-class="'next'"
      :prev-class="'prev'"
      >
    </paginate>
    </div>
  </div>
</template>
<script>
import * as dayjs from 'dayjs'
import FullImage from './FullImage'
import Paginate from 'vuejs-paginate'
import uuid from 'uuid'
import { mapActions } from 'vuex'


export default {
  name: 'TableResutl',
  components: {
    FullImage,
    Paginate
  },
  props: {
    result: {
      type: Array
    }
  },
  data() {
    return {
      fullImage: false,
      fullImageUrl: null,
      currentPage: 1,
      prevPage: 0,
      nextPage: 2
    }
  },
  methods: {
    ...mapActions('app', [
      'changeResult'
    ]),
    getDate: function(data) {
      return dayjs(+data).format('DD.MM.YYYY')
    },
    getTime: function(time) {
      const date  = dayjs(+time)
      const hours = date.get('h')
      const minutes = date.get('m')
      const seconds = date.get('s')
      return `${hours < 10 ? '0' + hours: hours}:${minutes < 10 ? '0' + minutes: minutes }:${seconds < 10 ? '0' + seconds: seconds}`
    },
    getStatus(data) {
      switch(data) {
        case 0: return 'Ниже нормы'
        case 1: return  'Угроза'
        case 2: return 'Норма'
      }
    },
    imageUrl: function(str) {
      this.fullImage = true
      this.fullImageUrl = str
    },
    closeImage: function () {
      this.fullImage = false
      this.fullImageUrl = false
    },
    clickCallback: function(page) {
      this.currentPage = page
      this.prevPage = page - 1
      this.arrayForRender()
    },
    arrayForRender: function() {
      return this.result.filter((item,index) => {
        return index >= this.prevPage * 8 && index < this.currentPage * 8
      })
    },
    setMeasurement: function(event) {
      this.changeResult({
        meta: uuid(),
        data: event.target.id
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 1280px;
  position: relative;
  background-image: linear-gradient(309.1deg, #63E2FF 25.59%, #A966FE 100%);
  border-radius: 20px;
  &.no-result {
    height: 920px;
  }
}
.header {
  color: #ffffff;
  text-align: center;
  font-size: 45px;
  margin-top: 0;
  margin-bottom: 0;
}
.result {
  &_no {
    margin-top: 150px;
    text-align: center;
    color: #ffffff;
    font-size: 25px;
  }
  &_yes {
    display: flex;
    flex-direction: column;
    height: 710px;
  }
}
.buttons {
  display: flex;
  justify-content: space-around;
  width: 1000px;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  & .button_main {
    box-shadow: 1px 3px 7px 0px #232323;
    &:first-child {
      margin-bottom: 20px;
      margin-left: 300px;
      margin-right: 300px;
    }
  }
}
.temp_deg {
  font-size: 18px;
}
.image {
  width: 50px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
}

.table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  border-style: hidden;
  margin-bottom: auto;
  border-radius: 15px;
  &__row {
    box-shadow: -2px 0 0 0 #DDECF2, 2px 0 0 0 #DDECF2, 0 0 0 1px #DDECF2;
    &:first-child {
      border-radius: 15px 15px 0 0;
      border: none;
    }
    &:last-child {
      border-radius: 0 0 15px 15px;
      border: none;
    }
    &.one {
      border-radius: 15px;
    }
    &-head {
      border:none;
      font-size: 20px;
      line-height: 24px;
      font: caption;
      color: #ffffff;
      & .table__cell {
        padding: 0;
        padding-bottom: 5px;
        font-weight: normal;
        &-dateh {
          text-align: left;
          padding-left: 30px;
        }
        &-photo {
          padding-right: 65px;
          text-align: center;
        }
        &-status {
          padding-left: 30px;
        }
      }
    }
  }
  &__cell {
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    font-size: 24px;
    line-height: 29px;
    &-date {
      position: relative;
      padding-left: 45px;
      width: 219px;
      &::before {
        position: absolute;
        width: 20px;
        height: 17px;
        top: 26px;
        left: 15px;
        content: '';
        background-image: url('../assets/date.svg');
      }
    }
    &-temp {
      position: relative;
      width: 149px;
      padding-left: 25px;
      &::before {
        position: absolute;
        width: 14px;
        height: 26px;
        top: 20px;
        left: 2px;
        content: '';
        background-image: url('../assets/temp.svg');
      }
    }
    &-image {
      display: flex;
      justify-content: center;
      width: 80px;
    }
    &-time {
      position: relative;
      width: 145px;
      padding-left: 30px;
      &::before {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 24px;
        left: 2px;
        content: '';
        background-image: url('../assets/time.svg');
      }
    }
    &-status {
      width: 153px;
      padding-left: 30px;
    }
  }

    }
    scrolly-bar.axis-y {
      right: -60px;
      width: 35px!important;
      border-radius: 4px;
      &::before {
        background-color: #619FCD;
      }
    }
    .scrolly .scrolly-bar {
      opacity: 1;
    }
    .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #00000038;
    border-radius: 20px;
    }

    .pagination {
      margin: 0;
      padding: 0;
      list-style: none;
      color: #ffffff;
      display: flex;
      width: 500px;
      justify-content: center;
      margin: 0 auto;
      margin-bottom: 50px;
      & li.active {
        color: #3964a6;
      }
    }
    .page {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 10px;
      border: 1px solid;
      border-radius: 50%;
      &.disabled {
        align-self: flex-end;
        border: none;
      }
    }
    .next {
      padding-top: 5px;
    }
    .prev {
      margin-right: 10px;
      padding-top: 5px;
    }
    .good {
      position: relative;
      color: #1e8054;
    &::before {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 24px;
      left: 2px;
      content: '';
      background-image: url('../assets/good.svg');
    }
    }
    .bad {
      position: relative;
      color: #FF6363;
    &::before {
      position: absolute;
      width: 20px;
      height: 18px;
      top: 24px;
      left: 2px;
      content: '';
      background-image: url('../assets/bad.svg');
    }
    }
    .low {
      position: relative;
      color: #FFA439;
    &::before {
      position: absolute;
      width: 20px;
      height: 18px;
      top: 24px;
      left: 2px;
      content: '';
      background-image: url('../assets/low.svg');
    }
    }
</style>