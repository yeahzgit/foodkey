import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import Dynamics from '../views/dynamics/Dynamics.vue'
import Editor from '../views/editor/Editor.vue'
import Message from '../views/message/Message.vue'
import Me from '../views/me/Me.vue'
import Contribution from '../components/me/Contribution.vue'
import Fans from '../components/me/Fans.vue'
import Follow from '../components/me/Follow.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import InfoEditor from '../components/me/InfoEditor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'dynamics',
          component: Dynamics
        },
        {
          path: 'editor',
          component: Editor
        },
        {
          path: 'message',
          component: Message
        },
        {
          path: 'me',
          component: Me,
          redirect: 'me/contribution',
          children: [
            {
              path: 'contribution',
              component: Contribution
            },
            {
              path: 'fans',
              component: Fans
            },
            {
              path: 'follow',
              component: Follow
            }
          ]
        },
        {
          path: 'me/info-editor',
          component: InfoEditor
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
