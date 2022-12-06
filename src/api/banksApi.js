import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getBanks = (orderBy = "name") => {
    let config = {
        url: BASE_URL + V1_URL + "banks?" + orderBy,
        headers
    }
    return connection.getBody(config)
}