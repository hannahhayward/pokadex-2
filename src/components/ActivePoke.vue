<template>
  <div v-if="activePoke.name" class="pokeModal">
    <div class="modal" tabindex="-1" id="pokeModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ activePoke.name }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="activePoke.url" alt="">
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      activePoke: computed(() => AppState.activePoke)
    }
  }
}
</script>
