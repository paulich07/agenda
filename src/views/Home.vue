<template>
  <div class="home">
    <CounterButton v-bind:totalClicks="totalClicks" v-on:welcome="increaseCount"/>
    <div>Total: {{ totalClicks }}</div>

    <div class="test">
      <h1>Vuex</h1>
      <p>Real clicks: {{ $store.state.count }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CounterButton from '@/components/CounterButton.vue'

export default {
  name: 'Home',
  data() {
    return {
      totalClicks: 0
    }
  },
  components: {
    CounterButton,
  },
  methods: {
    increaseCount: function() {
      //alert("Something");
      this.totalClicks++;
    },

  },
  computed: {
  }
}
</script>
