Vue.component('alert',{
  template:"#alert_component",
  data:function(){
    // data在这里必须是一个函数，所以可以返回一个对象来使用
    // 返回的对象里面有当前对象的属性和方法
    return{
      click_count:0,
      liked:false
    }
  },
  methods:{
    on_click:function(){
      if (!this.liked) {
        // 这里的liked的状态是当前对象的状态，所以
        this.click_count++;
      }
      else{
        this.click_count--;
      }
      this.liked=!this.liked
    }
  }
})
new Vue({
  el:"#app"
})
// 注意js对象的使用
