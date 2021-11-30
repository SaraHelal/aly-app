<template>
    <!-- Navbar goes here -->
		<nav class="bg-white">
			<div class="max-w-7xl mx-auto lg:p-2">
				<div class="flex justify-between">
					<div class="flex space-x-8 lg:space-x-14">
						<div class="flex-shrink-0">
							<!-- Website Logo -->
							<a href="#" class="flex items-center py-4 px-2">
								<img src="../../assets/logo.png" alt="Logo" class="h-18 w-18 mr-2">
							</a>
						</div>
						<!-- Primary Navbar items -->
						<div class="hidden md:flex items-center mx-auto lg:text-base md:text-xs text-blue-800 uppercase mx-auto lg:space-x-5 tracking-wide font-semibold">
							<a href="" class="py-2 px-3 text-white bg-light-red rounded-full  ">
                                    <i class="fas fa-user-check fa-l"></i>
                                Your Businesses</a>
							<a href="" class="py-4 px-2  hover:text-light-red transition duration-300">Advanced Search</a>
							<a href="" class="py-4 px-2  hover:text-light-red transition duration-300">Event</a>
							<a href="" class="py-4 px-2  hover:text-light-red transition duration-300">Promotion</a>
						</div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="hidden md:flex items-center space-x-1 ">
                        <div class="rounded-full text-blue-800 border-2 border-blue-800 text-center  h-10 w-10"><i class="far fa-newspaper fa-lg mt-4"></i></div>
                        <div class="bg-blue-800 text-white py-3 px-10 bg-blue-800 text-white rounded-full mr-6 flex relative"><p class="font-semibold tracking-wide">Login</p><span class="arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>arrow-right</title><path d="M11 16.5v-3.5h-8v-6h8v-3.5l6.5 6.5-6.5 6.5z"></path></svg></span></div>
                      
						<!--
                        <a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
						<a href="" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
                        -->
                    </div>
					<!-- Mobile menu button -->
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			
		</nav>
</template>


<script>
export default {
    name: 'NavBar2'
}
</script>
