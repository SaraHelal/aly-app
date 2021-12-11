<template>
    <div v-if="loginButton" :class="` py-3 px-10 ${buttonStats.bg} ${buttonStats.color} ${buttonStats.border} rounded-full mr-6 flex relative`">
        <p class="font-semibold tracking-wide">{{buttonStats.title}}</p><span :class="`arrow ${buttonStats.bg} `"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>arrow-right</title><path d="M11 16.5v-3.5h-8v-6h8v-3.5l6.5 6.5-6.5 6.5z"></path></svg></span></div>

    <a v-else  href="#"  :class="`px-16 py-2 w-70 md:px-16 md:py-2 flex items-center justify-left rounded-full border ${buttonStats.bg} ${buttonStats.border}  ${buttonStats.color} my-1`">
    {{ buttonStats.title}}
        <span :class="`border-2 ${buttonStats.iconBorder} flex justify-center items-center rounded-full  w-8 h-8 ${buttonStats.mLeft}`"><i class="fas fa-arrow-right "></i></span>
    </a>
</template>
<script>
export default {
    name: 'Button',
    data(){
        return{
           buttonStats:{
               title: '',
               color: '',
               bg : '',
               border : '',
               iconBorder: ''
           },
           loginButton : false
        }
    },
    created(){
        if(this.type === 'login'){
            this.loginButton = true;
            this.buttonStats = {
                title : 'Login',
                color :'text-white' ,
                bg: 'bg-blue-900' , 
                border: 'border-white',
                iconBorder: 'border-white'
            };
        }
        else if(this.type === 'add-review'){
            this.buttonStats = {
                title : 'Add Review',
                color :'text-white' ,
                bg: 'bg-blue-900' , 
                border: 'border-white',
                iconBorder: 'border-white',
                mLeft:'ml-2'
            };
        }
        else if(this.type === 'add-business'){
            this.buttonStats = {
                title : 'Add Business',
                color :'text-blue-800' ,
                bg: 'bg-white' , 
                border: 'border-blue-800',
                iconBorder: 'border-blue-800',
                mLeft:'ml-1'
            };
        }
        else{
             this.buttonStats = {
                title : this.type,
                color :'text-white' ,
                bg: 'bg-blue-800' , 
                border: 'border-white',
                iconBorder: 'border-white'
            };
        }
        
    },
    props:['type']
}
</script>

<style scoped>

</style>