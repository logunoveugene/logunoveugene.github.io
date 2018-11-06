<template>
  <div class="post-info" :class="{'post-info--no-border': border}">
    <div class="post-info__rating">
      <div class="post-info__icon">
        <div class="icon-thumb-up"></div>
      </div>
      <div class="post-info__count">{{like}} </div>
    </div>
    <div class="post-info__views">
      <div class="post-info__icon">
        <div class="icon-open-eye"></div>
      </div>

      <div class="post-info__count">{{view}}</div>
    </div>
    <br v-if="lastactivity" >
    <div class="post-info__comments">
      <div class="post-info__icon">
        <div class="icon-chat-bubble"></div>
      </div>

      <div class="post-info__count">{{comment}} </div>
      <!--<div class="post-info__activity d-none d-sm-block" v-if="lastactivity">ответов, последний {{lastactivity | fdate}}</div> -->
    </div>
  </div>

</template>

<script>
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/ru' 

  dayjs.locale('ru') 
  dayjs.extend(relativeTime)

  export default  {
    props: { 
      like: {
        type: null,
        default: ""
      },
      view: {
        type: null,
        default: ""
      },
      comment: {
        type: null,
        default: ""
      },
      lastactivity: {
        type: null,
        default: ""
      },
        border:{
            type: null,
            default: ""
        }
    },
    filters: {
      fdate: function(value) {
        return dayjs().to(dayjs(value));
      }
    },
    data: function() {
      return {

      }
    }
  }
</script>

<style>
.post-info {
  border: 1px solid #eee;
  border-radius: .25rem;
  padding: 0 .75rem;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -ms-inline-flexbox;
  display: inline-flex;
  background: #fff;
}
.post-info--no-border{
  border: none;
  padding: 0;
  background: none;

}
.post-info__rating{
  margin-right: 1.5rem;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  color: #28a745;
  font-weight: 700;
}
.post-info__views{
  margin-right: 1.5rem;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  color: #6c757d;
}
.post-info__comments{
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  color: #6c757d;
}

.post-info__icon{
  padding-top: .25rem;
  margin-right: .5rem;
}
.post-info__count{
  font-size: .875rem;
}
.post-info__activity{
  margin-left: .25rem;
  font-size: .875rem;
}

</style>