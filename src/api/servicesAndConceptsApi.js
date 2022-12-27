import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getServices = () => {
    let config = {
        url: BASE_URL + V1_URL + "services",
        headers
    }
    return connection.getBody(config)
}

export const getConcepts = () => {
    let config = {
        url: BASE_URL + V1_URL + "settlement-concepts?service_code=01",
        headers
    }
    return connection.getBody(config)
}

export const getClientData = (conceptCode) => {
    let config = {
        url: BASE_URL + V1_URL + "settlement-concepts-client-data?concept_code=" + conceptCode,
        headers
    }
    return connection.getBody(config)
}