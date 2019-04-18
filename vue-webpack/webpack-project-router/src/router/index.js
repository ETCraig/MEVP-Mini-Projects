import Vue from 'vue'
import Router from 'vue-router'
import One from '../components/One.vue'
import Two from '../components/Two.vue'
import Three from '../components/Three.vue'
import Child from '../components/Child.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      redirect: {
        name: 'First',
        params: {
          msg: 'Welcome'
        }
      }
    },
    {
      path: '/comp_one/:msg',
      name: 'One',
      component: One,
      children: [
        {
          path: 'child',
          component: Child
        }
      ]
    },
    {
      path: '/comp_two',
      name: 'Two',
      components: {
        default: Two,
        child: Child
      }
    },
    {
      path: '/comp_three',
      name: 'Three',
      component: Three
    },
  ]
});
