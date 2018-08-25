 //vue 学习的开始
 var app=new Vue({
   el:"#app",
   data:{
     name:"hello ",
     age:22,
     panduan:false
   },
   methods:{
     tan:function() {
       console.log("提交了 ")
     }
   },
   computed:{
     new_age:function(){
  return     this.age*2
     }
   }
 })
