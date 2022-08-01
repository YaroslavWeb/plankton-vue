import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGear,
  faLocation,
  faUser,
  faEdit,
  faTrash,
  faCat,
  faPizzaSlice,
  faHandMiddleFinger,
  faDragon,
  faBurger,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import './assets/base.css'

library.add(
  faGear,
  faVuejs,
  faLocation,
  faUser,
  faEdit,
  faTrash,
  faCat,
  faPizzaSlice,
  faHandMiddleFinger,
  faDragon,
  faBurger,
  faSkullCrossbones,
)

const app = createApp(App).component('FA', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
