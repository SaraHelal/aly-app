<template>
  <!--<div id="nav" class=" container flex justify-between items-center">
    <router-link to="/"><a class=""><img src="./assets/logo.png" alt="logo" class="h-18 w-18 mr-2" /></a></router-link> 
    <NavBar2 />
  </div>-->
  <div class="container">
  <NavBar2 />

  </div>
  
  <router-view/>
</template>
<script>
import NavBar2 from './components/global/NavBar2'
export default {
  components: {
    NavBar2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

 
.arrow {
      display: inline-block;
    border-radius: 50%;
    position: absolute;
    right: -1.5rem;
    top: -.4rem;
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
