<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="text" label="test" :disabled="true" /><input>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      Test: ''
    }
  }
}
</script>
