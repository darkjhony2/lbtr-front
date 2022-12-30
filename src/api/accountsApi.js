import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getAccounts = () => {
    let config = {
        url: BASE_URL + V1_URL + "account-type",
        headers
    }
    return connection.getBody(config)
}