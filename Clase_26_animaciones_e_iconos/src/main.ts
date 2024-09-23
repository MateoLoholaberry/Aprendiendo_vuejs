import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiFileCodeFill, MdControlpointSharp } from 'oh-vue-icons/icons'

addIcons(BiFileCodeFill, MdControlpointSharp)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
