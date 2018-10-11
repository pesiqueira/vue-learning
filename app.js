new Vue({
    el:'#vue-app',
    data:{
        age: '25',
        x: 0,
        y: 0,
    },
    methods:{
       add: function(inc){
           this.age = this.age + inc;
       },
       sub: function (dec) {
           this.age = this.age - dec;
       },
       updateXY: function(event){
           this.x = event.offsetX;
           this.y = event.offsetY;
           event.offsetX = 0;
           event.offsetY = 0;

           console.log(event);
       },
       click: function(){
           alert('You clicked me');
       }
    }
});