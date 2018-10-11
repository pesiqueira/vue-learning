new Vue({
    el:'#vue-app',
    data:{
        age:20,
        a:0,
        b:0
    },
    methods:{
        // addToA: function(){
        //     console.log('AddtoA');
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log('AddtoB');

        //     return this.b + this.age;
        // }
    },
    computed:{
        addToA: function(){
            console.log('AddtoA');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('AddtoB');

            return this.b + this.age;
        }
    }
});