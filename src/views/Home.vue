<template>
  <div class="home container">
    <Search/>
    <ConnectHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search'
import ConnectHeader from '../components/ConnectHeader'




export default {
  name: 'Home',
  components: {
    Search,
    ConnectHeader
     
  }
}
</script>
