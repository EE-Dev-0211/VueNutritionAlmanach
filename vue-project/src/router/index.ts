import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Parent1 from "@/components/Parent1.vue";
import Parent2 from "@/components/Parent2.vue";
import Parent3 from "@/components/Parent3.vue";
import OptionVSComposition from "@/components/OptionVSComposition.vue";
import ArrayPlayground from "@/components/ArrayPlayground.vue";
import SuppComparison from "@/components/SuppComparison.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/PlayGround.vue')
    },
    {
      path: '/childtoparent1w',
      name: 'parent1',
      component: Parent1
    },
    {
      path: '/parenttochild1w',
      name: 'parent2',
      component: Parent2
    },
    {
      path: '/2waybinding',
      name: 'parent3',
      component: Parent3
    },
    {
      path: '/optionvscomposition',
      name: 'optionvscomposition',
      component: OptionVSComposition
    },
    {
      path: '/arrays',
      name: 'arrays',
      component: ArrayPlayground
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/SuppComparison',
      name: 'SuppComparison',
      component: SuppComparison
    }
  ]
})

export default router
