import {v4 as uuidv4} from "uuid";
import {API_URL_OLD} from "./apiName";

export const submitInviteAPI = async (name, beer, social, avatar) => {
    let data = {
        name: name, beer: beer, social: social, photo: avatar, id: uuidv4()
    }
    return await fetch(`${API_URL_OLD}/addNewUser`, {
        method: 'POST', headers: {
            'Content-type': 'application/json',
        }, body: JSON.stringify(data)
    }).then(response => response.json())
        .then(response => response.message)
}