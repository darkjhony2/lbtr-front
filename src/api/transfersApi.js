import { BASE_URL, V1_URL } from '../config'
import * as connection from './connection'

const headers = {
    "Authorization": "Bearer " + localStorage.getItem('owl')
}

export const saveTransfer = (transfer, uuid) => {
    let config = {
        url: BASE_URL + V1_URL + "transfers/" + uuid,
        headers
    }
    return connection.putBody(config, transfer)
}

export const saveTransferWithClientData = (transfer, uuid) => {
    let config = {
        url: BASE_URL + V1_URL + "transfers/" + uuid + "/client-data",
        headers
    }
    return connection.putBody(config, transfer)
}