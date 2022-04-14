export const submitLoginAPI = (values) => {
    return fetch('https://allbackbeer.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(values)
    }).then(response => response.json())
        .then(response => response.access)
}