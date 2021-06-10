<template>
  <li data-toggle="modal" data-target="#pokeModal" @click="setPoke">
    <h6>
      <i class="mdi mdi-pokeball text-danger"></i>
      {{ poke.name }}
    </h6>
  </li>
  <ActivePoke />
</template>

<script>
import { reactive } from '@vue/reactivity'
import { pokeService } from '../services/PokeService'
export default {
  props: { poke: { type: Object, required: true } },
  setup(props) {
    const state = reactive({

    })
    return {
      state,
      setPoke() {
        pokeService.setPoke(props.poke.name)
        // pokeService.pokeDetails(props.poke.name)
      }

    }
  }
}
</script>
