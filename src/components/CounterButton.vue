<template>
  <div>
    <div class="hello">
      <button @click="$emit('welcome'); increment_count();">Click me</button>
      <!--<div>You clicked {{ count }} times</div>-->
    </div>
    <app-viewer v-bind:totalClicks="totalClicks"></app-viewer>
  </div>
</template>

<script>
import Viewer from '@/components/Viewer.vue'

export default {
  name: 'CounterButton',
  components: {
    'app-viewer': Viewer
  },
  data() {
    return {
      count: 0
    }
  },
  props: ['totalClicks'],
  methods: {
    increment_count() {
      this.$store.commit('INCREMENT_COUNT')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  height: 150px;
  width: 300px;
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background: #42b983;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
