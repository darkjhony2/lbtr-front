import { BASE_URL } from '../config'
import * as connection from './connection'

export const login = (data) => {
    let config = {
        url: BASE_URL + "authenticate",
    }
    return connection.postBody(config, data)
}

