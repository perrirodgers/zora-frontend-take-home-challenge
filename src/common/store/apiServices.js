import axios from "axios";

// for getting default header payload
const getInstanceHeaders = () => {
    let headers = {};

    return {
        ...headers,
        "Content-Type": "application/json",
    };
}

// for initiating automate api call from axios & return response

export const Instance = async (method = "GET", URL, params = {},) => {

    const headers = getInstanceHeaders();

    try {
        let config = {
            method: method,
            url: URL,
            headers: headers,
        };

        if (method === "GET") {
            config = { ...config }
        } else if (method === "DELETE") {
            config.data = params ? JSON.stringify(params) : new FormData();
        } else if (method === "PUT") {
            config.data = JSON.stringify(params);
        } else if (method === "PATCH") {
            config.data = params ? params : new FormData();
        } else {
            config.data = params ? params : new FormData();
        }

        const response = await axios(config);
        return response;

    } catch (err) {
        return err;
    }
};
