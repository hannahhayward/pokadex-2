<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <PokeList />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-7 m-auto">
        <p>test test</p>
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from '../utils/Logger'
import { pokeService } from '../services/PokeService'
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(async() => {
      try {
        pokeService.getPokes()
      } catch (error) {
        logger.log(error.message)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
