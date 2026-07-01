import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Ruta inicial: El Login (Aún no tienes el archivo, pero lo dejamos preparado)
  {
    path: '/',
    component: () => import('../layout/Mainlayout.vue') 
  },
  {
    path: '/gym',
    component: () => import('../layout/Mainlayout.vue'),
    children: [
      { path: 'espalda', component: () => import('../views/Espalda.vue') },
      { path: 'pecho', component: () => import('../views/Pecho.vue') },
      { path: 'brazo', component: () => import('../views/Brazo.vue') },
      { path: 'pierna', component: () => import('../views/Pierna.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router