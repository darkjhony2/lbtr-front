import { BASE_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": localStorage.getItem('owl')
}

export const login = (data) => {
    let config = {
        url: BASE_URL + "authenticate",
        headers
    }
    return connection.sendPostBody(config, data)
}

