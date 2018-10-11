new Vue({
    el:'#vue-app',
    data:{
        name:'Paulo',
        job: 'IBM',
        website: 'http://www.ibm.com'
    },
    methods:{
        greet: function(time){
            this.name
            return 'Good ' + time + ' ' + this.name;
        }
    }
});