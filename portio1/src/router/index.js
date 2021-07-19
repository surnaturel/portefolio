import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Cv from '@/views/Cv.vue'
import Services from '@/views/Services.vue'
import Appropos from '@/views/Appropos.vue'
import Work from '@/views/Work.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component : About
	},
	{
		path: '/cv',
		name: 'Cv',
		component: Cv
	},
	{
		path: '/services',
		name: 'Services',
		component: Services 
	},
	{
		path: '/appropos',
		name: 'Appropos',
		component: Appropos 
	}
	,
	{
		path: '/work',
		name: 'Work',
		component: Work 
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
