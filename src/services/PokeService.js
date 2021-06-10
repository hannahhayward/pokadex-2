import { AppState } from '../AppState'

const { default: axios } = require('axios')
const { logger } = require('../utils/Logger')
const pokeApi = 'https://pokeapi.co/api/v2/pokemon'
class PokeService {
  async getPokes() {
    const res = await axios.get(pokeApi)
    AppState.pokeList = res.data.results
    logger.log(AppState.pokeList)
  }

  setPoke(pokeName) {
    const poke = AppState.pokeList.find(p => p.name === pokeName)
    AppState.activePoke = poke
    logger.log(AppState.activePoke, 'active poke')
  }
}
export const pokeService = new PokeService()
