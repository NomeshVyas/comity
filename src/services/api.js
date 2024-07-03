import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

const API = async ( urlObj, payload ) => {
    return await axios({
        method: urlObj.method,
        url: `${BASE_URL}/${urlObj.endpoint}`,
        data: payload
    })
}

export default API;