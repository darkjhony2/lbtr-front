import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getMotherAccounts = (bankCode, currencyCode) => {
    let config = {
        url: BASE_URL + V1_URL + "parent-ordinary-accounts?bankCode=" + bankCode + "&currencyCode=" + currencyCode ,
        headers
    }
    return connection.getBody(config)
}