import {API_URL_OLD} from "./apiName";

export const submitLoginAPI = (values) => {
    return fetch(`${API_URL_OLD}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
    }).then(response => response.json())
        .then(response => response.access)
}