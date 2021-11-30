<template>
  <div class="home container">
    <Search/>
    <ConnectHeader />
    <ImagesTab />
    <SectionTitle title="Popular this week .." />
    <PopularThisWeek />
    <SectionTitle title="Review of the day .." />
  </div>
</template>

<script>

// @ is an alias to /src
import Search from '../components/Search'
import ConnectHeader from '../components/ConnectHeader'
import ImagesTab from '../components/ImagesTab'
import SectionTitle from '../components/global/SectionTitle'
import PopularThisWeek from '../components/PopularThisWeek'




export default {
  name: 'Home',
  components: {
    Search,
    ConnectHeader,
    ImagesTab,
    SectionTitle,
    PopularThisWeek
  },
  props:['title']
}
</script>
