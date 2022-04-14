export const getMembersAPI = () => {
    return fetch('https://allbackbeer.herokuapp.com/getUsers', {
        method: 'GET', headers: {
            'Content-type': 'application/json',
        },
    }).then(response => response.json())
        .then(response => (response.reverse()))
}

export const deleteMemberAPI = (uid) => {
    return fetch('https://allbackbeer.herokuapp.com/del', {
        method: 'POST', headers: {
            'Content-type': 'application/json',

        }, body: JSON.stringify({uid})
    }).then(response => response.json()).then(response => (response.reverse()))
}