import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const saveForeignCurrencyBuy = (foreignCurrencyBuy, uuid) => {
    let config = {
        url: BASE_URL + V1_URL + "currency-purchase/" + uuid,
        headers
    }
    return connection.putBody(config, foreignCurrencyBuy)
}