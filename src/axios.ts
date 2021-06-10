import axios from 'axios'

const service = axios.create({
  timeout: 50000,
  headers: {
    token: "68FCC10D17DA063E4D56479CBC205E6EB53403F3A2D39B7BD0D1B5FFDFED81F915A2DDEE7B612180EE73503DF7D96F923DA0E7E421AAA1A4CDB2AED07014A9A7"
  },
})

const getList = () => service.get(`/api/speed/list`)
export { getList }