import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const getIdentificationTypes = (data) => {
    let config = {
        url: BASE_URL + V1_URL + "document-types",
        headers
    }
    return connection.getBody(config)
}
