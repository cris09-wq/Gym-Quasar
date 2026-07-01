import { createApp } from 'vue'
import { Quasar } from 'quasar'
import * as quasarComponents from 'quasar'

// Iconos y estilos de Quasar
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './style.css'
import App from './App.vue'
import router from './routes/routes.js' // 👈 Importamos tus rutas

const app = createApp(App)

// Acoplamos Quasar y el Router a la app
app.use(Quasar, {
  components: quasarComponents,
})
app.use(router) // 👈 Activamos el router

app.mount('#app')