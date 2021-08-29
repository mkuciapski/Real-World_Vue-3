import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/eventdetails/:id',
    name: 'Details',
    component: EventDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
