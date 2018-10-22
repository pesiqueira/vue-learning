var one = new Vue({
    el:'#vue-app',
    data: {
        output: 'Your fav food'
    },
    methods:{
        readReafs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
});