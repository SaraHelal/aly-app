<template>
        
        
            <div class="flex flex-col justify-between items-center font-Poppins rounded-xl border-2 shadow-2xl border-gray-200 max-h-96 mb-8" v-for="userStat in userStats" :key="userStat.id">
                <div class="flex flex-col items-center justify-center p-4">
                    <img :src="userStat.img" width="80" height="80" class="border-4 border-gray-200 rounded-full"/>
                    <span class="mt-1 text-black text-lg">{{userStat.name}}</span>
                    <p class=" text-sm mb-4 text-gray-600 "><i class="fas fa-map-marker-alt fa-xl text-light-red mr-2"></i>{{ userStat.address}}</p>

                </div>
                <div class="grid grid-cols-3 gap-3 w-1/2">
                    <div>
                        <i class="fas fa-users fa-xl text-light-red"></i>
                        <span class="ml-2">{{ userStat.friendsCount}}</span>
                    </div>
                    <div>
                        <i class="fas fa-star fa-xl text-yellow-500"></i>
                        <span class="ml-2">{{ userStat.starsCount}}</span>
                    </div>
                    <div>
                        <i class="fas fa-camera fa-xl"></i>
                        <span class="ml-2">{{ userStat.uploadedImgsCount}}</span>
                    </div>

                </div>
                <div class="text-center flex justify-center items-center">
                    <a  href="#" class="block px-8 py-1 my-6 md:px-6 md:py-1 flex items-center justify-center rounded-full border-4 uppercase bg-blue-800 border-blue-800 text-white">
                        Follow
                    </a>

                </div>

            </div>
        
    
</template>

<script>
export default {
    name:'UsersBox',
    props:['userStats'],
}
</script>