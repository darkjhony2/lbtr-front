import axios from "axios";

export const sendPostBody = async (config, body) => {
    return (await axios.post(config.url, body, config)).data;
}

