<template>
    <div class="max-w-lg bg-gray-200 text-gray-500 font-semibold mx-auto rounded-full p-4 relative"> Search Business Place
    
    <span class="arrow p-5"><i class="fas fa-search text-white"></i></span></div>
    
</template>
<script>
export default {
    name: 'Search',
    
}
</script>

<style scoped>
 
.arrow {
      display: inline-block;
    border-radius: 50%;
    position: absolute;
    right: -1.5rem;
    top: -.2rem;
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