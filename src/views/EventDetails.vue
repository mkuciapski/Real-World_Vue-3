<template>
  <div v-if="event">
    <span>{{ $route.params.id }}</span>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/Services/EventService.js'

export default {
  components: {},
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(response => {
        console.log(response)
        this.event = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped></style>
