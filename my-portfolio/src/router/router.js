import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import Home from '../views/Home.vue';
import Resume from '../views/Resume.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', component: Welcome },
  { 
    path: '/home', 
    component: Home,
    children: [
      { path: 'resume', component: Resume },
      { path: 'contacts', component: Contacts },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
