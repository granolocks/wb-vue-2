import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Terminal from './components/Terminal/Terminal.vue'
import TerminalAsset from './components/Terminal/TerminalAsset.vue'
import TorqueProfile from './components/Terminal/TorqueProfile.vue'
import Redirector from './components/Redirector.vue'


export const router = new Router({
  routes: [
    { path: '/', component: Redirector},
    { path: '/terminals/:terminal_id', component: Terminal,
    children: [
      {

        path: 'assets/:asset_id', component: TerminalAsset,
        children: [{

          path: 'torque_profile',
          component: TorqueProfile
        }]
      }

    ]
  }
]
})
