<template>
  <div class="home xl:container mb-16">
    <Search/>
    <ConnectHeader />
    <SectionTitle title="Popular this week .." />
    <PopularThisWeek />
    <SectionTitle title="Review of the day .." />
    <ReviewOfTheDay />
    <SectionTitle title="Users of the day .." />
    <UsersOfTheDay />

  </div>
</template>

<script>

// @ is an alias to /src
import Search from '../components/Search'
import ConnectHeader from '../components/ConnectHeader'
import SectionTitle from '../components/global/SectionTitle'
import PopularThisWeek from '../components/popular/PopularThisWeek'
import ReviewOfTheDay from '../components/review/ReviewOfTheDay'
import UsersOfTheDay from '../components/users/UsersOfTheDay'





export default {
  name: 'Home',
  components: {
    Search,
    ConnectHeader,
    SectionTitle,
    PopularThisWeek,
    ReviewOfTheDay,
    UsersOfTheDay
  },
  props:['title']
}
</script>
