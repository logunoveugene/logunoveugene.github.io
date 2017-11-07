<template>

  <button @click="openpicker" :ref="datepickerId" :datepickerId="datepickerId" class="ml-auto btn btn-admin"><img class="mr-2" src="https://i.snag.gy/6fGx1q.jpg" alt="">Новый заказ</button>
</template>

<script>
import VueHotelDatepicker from 'vue-hotel-datepicker'

export default {
  name: 'App',
  components: {
    VueHotelDatepicker,
  },
  data(){
    return {
      datepickerId: 'datepicker-demo-id-01',
      placeholder: 'placeholder demo 01'
    }
  }
}
</script>
