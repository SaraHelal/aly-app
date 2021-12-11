<template>
    <div v-show="visibleSlide === index" class="carousel">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CarouselSlide',
    data(){
        return{
        }
    },
    
    props:['visibleSlide','index']
}
</script>