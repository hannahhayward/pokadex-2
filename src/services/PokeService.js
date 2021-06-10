import { AppState } from '../AppState'

const { default: axios } = require('axios')
const { logger } = require('../utils/Logger')
const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'
class PokeService {
  async getPokes() {
    const res = await axios.get(pokeApi)
    AppState.pokeList = res.data.results
    logger.log(AppState.pokeList)
  }

  async setPoke(pokeName) {
    const res = await axios.get(pokeApi + pokeName)
    AppState.activePoke = res
    // this.pokeDetails(pokeName)
    logger.log(AppState.activePoke, 'active poke')
  }

  // async pokeDetails(pokeName) {
  //   const res = await axios.get(pokeApi + pokeName)
  //   logger.log(res.data)
  // }
}
export const pokeService = new PokeService()
