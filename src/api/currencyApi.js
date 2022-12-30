import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getCurrencies = () => {
    let config = {
        url: BASE_URL + V1_URL + "currencies",
        headers
    }
    return connection.getBody(config)
}