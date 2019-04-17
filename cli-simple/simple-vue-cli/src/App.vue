<template>
  <div id="app">
    <Red />
    <White />
    <Blue />
  </div>
</template>

<script>
import Red from './components/Red';
import White from './components/White';
import Blue from './components/Blue';

export default {
  components: {
    Red,
    White,
    Blue
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
