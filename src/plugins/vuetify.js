import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { preset } from './neumorphism-ui/preset'

Vue.use(Vuetify)

const opts = {
  preset,
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#88cccc'
      }
    }
  }
}

export default new Vuetify(opts)