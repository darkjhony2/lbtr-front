import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getOpeningStatus = () => {
    let config = {
        url: BASE_URL + V1_URL + "bcrp-authentication/status",
        headers
    }
    return connection.getBody(config)
}

export const openDay = () => {
    let config = {
        url: BASE_URL + V1_URL + "bcrp-authentication/logOn",
        headers
    }
    return connection.putBody(config)
}

export const closeDay = () => {
    let config = {
        url: BASE_URL + V1_URL + "bcrp-authentication/logOff",
        headers
    }
    return connection.putBody(config)
}