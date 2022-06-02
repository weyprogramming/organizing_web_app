import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KVTasks from '../views/apps/Tasks.vue'
import AddTask from '../views/apps/AddTask.vue'
import KVIdeas from '../views/apps/Ideas.vue'
import KVIdeasDetails from '../views/apps/IdeasDetails.vue'
import Votes from '../views/apps/Votes.vue'
import VotingDetails from '../views/apps/VotingDetails.vue'
import MeetingHome from '../views/apps/MeetingHome.vue'
import WriteSessionProtocol from '../views/apps/WriteSessionProtocol.vue'
import WriteSessionProtocolDynamic from '../views/apps/WriteSessionProtocolDynamic.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aufgaben',
    name: 'KVTasks',
    component: KVTasks
  },
  {
    path: '/aufgaben/erstellen',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/ideen',
    name: 'KVIdeas',
    component: KVIdeas
  },
  {
    path: '/ideen/1',
    name: 'KVIdeasDeails',
    component: KVIdeasDetails
  },
  {
    path: '/abstimmungen',
    name: 'Votes',
    component: Votes
  },
  {
    path: '/abstimmungen/1',
    name: 'VotingDetails',
    component: VotingDetails
  },
  {
    path: '/sitzungen',
    name: 'MeetingHome',
    component: MeetingHome
  },
  {
    path: '/sitzungen/protokoll/schreiben',
    name: 'WriteSessionProtocol',
    component: WriteSessionProtocol
  },
  {
    path: '/sitzungen/protokoll/schreiben/dynamic',
    name: 'WriteSessionProtocolDynamic',
    component: WriteSessionProtocolDynamic
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
