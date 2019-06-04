import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Projects from './views/Projects.vue'
import CurrentProjects from './views/CurrentProjects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {path: '/CurrentProjects', name: 'CurrentProjects', component: CurrentProjects}
  ]
})
