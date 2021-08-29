<template>
  <div class="events">
    <h1>Events For Good</h1>
    <div v-if="events">
      <router-link
        class="event-link"
        :to="{ name: 'Details', params: { id: event.id } }"
        v-for="event in events"
        :key="event.id"
      >
        <EventCard :key="event.id" :event="event" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/Services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then(response => {
        console.log(response)
        this.events = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
