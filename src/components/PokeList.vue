<template>
  <ul class="pokies">
    <Pokemon v-for="p in pokeList" :key="p.name" :poke="p" />
  </ul>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      pokeList: computed(() => AppState.pokeList)
    }
  }
}
</script>
