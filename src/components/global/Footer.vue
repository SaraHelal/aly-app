<template>
    <div class="bg-gray-100 pb-20 pt-8 px-8">
        <div class="sm:flex  items-start justify-between capitalize">
            <div>
                <a href="#" class="flex justify-center items-center mx-6 box-border mb-4">
                    <img src="../../assets/logo.png" alt="Logo" class="h-18 w-18 mr-2">
                </a>
            </div>
            <div class="hidden lg:block text-left">
                <h4 class=" font-semibold text-2xl text-black mb-4 ">Quick Links</h4>
                <ul class="text-blue-800 text-xl font-thin">
                    <li class="my-2">Join Us</li>
                    <li>Home</li>
                    <li class="my-2"> How it works</li>
                    <li>Popular This Week</li>
                    <li class="my-2">Reviews of the day</li>
                </ul>
            </div>
            <div class="text-center sm:text-left">
                <h4 class=" font-semibold text-2xl text-black mb-4">Resources</h4>
                <ul class=" text-blue-800 text-xl font-thin">
                    <li class="my-2">Help</li>
                    <li>FAQ</li>
                    <li class="my-2"> Terms of service</li>
                    <li>Privecy Policy</li>
                    <li class="my-2">Contact Us</li>
                </ul>
            </div>
            <div class="text-center sm:text-left mb-6">
                <h4 class=" font-semibold text-2xl text-black mb-4">Know Us</h4>
                <ul class=" text-blue-800 text-xl font-thin">
                    <li class="my-2">About us</li>
                    <li>Our team</li>
                </ul>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="inline-block text-center">
                    <i class="fab fa-facebook-f fa-lg rounded-full border w-11 py-5 px-3 bg-gray-300 text-blue-700 mr-2"></i>
                    <i class="fab fa-instagram fa-lg rounded-full border w-11 py-5 px-3 bg-gray-300 text-blue-700 mr-2"></i>
                    <i class="fab fa-twitter fa-lg rounded-full border w-11 py-5 px-3 bg-gray-300 text-blue-700 mr-2"></i>
                    <i class="fab fa-linkedin-in fa-lg rounded-full border w-11 py-5 px-3 bg-gray-300 text-blue-700"></i>
                </div>
                <input type="text" placeholder="@Email" class="w-40 border rounded border-gray-400 p-1 my-3 text-center outline-none">
                <a href="#" class="bg-blue-800 text-white p-2 rounded-full">Subscribe</a>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    
}
</script>

<style scoped>

</style>