import axios from "axios";

export const postBody = async (config, body) => {
    return (await axios.post(config.url, body, config)).data;
}

export const getBody = async(config) => {
    return (await axios.get(config.url, config)).data;
}

