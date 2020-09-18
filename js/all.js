let app=new Vue({
    el:".app",
    data:{
        nt:0,
    },computed: {
        usd(){
            return Math.floor(this.nt/29.315*100)/100	
        },
        jpy(){
                return  Math.floor(this.nt*0.2806*100)/100	
        },
        hkd(){
            return  Math.floor(this.nt/3.795*100)/100	
        }
    },
})