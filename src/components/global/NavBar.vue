<template>

            
            <div class="flex justify-between  lg:space-x-10 text-center items-center  ">
                <a class="p-3 bg-red-500 capitalize font-semibold text-white rounded-full ">
                    <i class="fas fa-user-check fa-l"></i>
                    Your Businesses
                </a>  
                <a class="">Advanced Search</a>       
                <a class="">Event</a>
                <a class="">promotion</a>
                <div class="rounded-full text-blue-800 border-2 border-blue-800 text-center mr-2 px-1 py-3"><i class="far fa-newspaper fa-xl p-2"></i></div>
                <div class="bg-blue-800 text-white py-3 px-14 bg-blue-800 text-white rounded-full mr-6 flex relative"><p class="">Login</p><span class="arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>arrow-right</title><path d="M11 16.5v-3.5h-8v-6h8v-3.5l6.5 6.5-6.5 6.5z"></path></svg></span></div>
            </div>
    
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
 
.arrow {
      display: inline-block;
    border-radius: 50%;
    position: absolute;
    right: -1.5rem;
    top: 0;
    border: 3px solid white;
    padding: 1rem;
    border: 2 px solid #fff;
    fill: #fff;
    margin-left: 3.3 rem !important;
    box-shadow: 0 2rem 4rem rgb(24 107 254 / 7%);
    background-color: #23539f;
    width: 4.4 rem;
    height: 4.4 rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>