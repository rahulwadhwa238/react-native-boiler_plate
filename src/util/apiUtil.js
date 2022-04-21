import EncryptedStorage from 'react-native-encrypted-storage';

export const apiCall = (url, body, method) => {
    EncryptedStorage.getItem('accessToken').then((value) => {
        token = value
    })
    EncryptedStorage.getItem('refreshToken').then((value) => {
        refreshToken = value
    })

    console.log("Token------->", token)

    const timezoneOffset = new Date().getTimezoneOffset()
    const headers = {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    if (token) {
        headers['Authorization'] = token;
    }
    return fetch(url, {
        method: method,
        headers,
        body: body ? JSON.stringify(body) : null,
    })
        .then(response => {
            return new Promise(function (resolve, reject) {
                response.json().then(responseParsed => {
                    if (response?.status == 402) {
                        console.log("token experied ", responseParsed.tokenExpired)
                    }
                    if (response.status == 200 || response.status == 201 || response.status == 204) {
                        resolve({ status: response.status, result: responseParsed })
                    } else if (response.status == 401 || response.status == 400 || response.status == 409 || response.status == 404) {             // access token unauthorised
                        resolve({ status: response.status, result: responseParsed })
                    } else if (response.status == 500) {             // internal server error
                        resolve({
                            status: response.status, result: {
                                ...responseParsed,
                                error: "Something went wrong!."
                            }
                        })
                    } else if (response.status == 411) {            //account blocked/deleted
                        resolve({ status: response.status, result: { responseParsed } })
                    } else {
                        resolve({ status: 400, result: responseParsed })                                       // failed
                    }
                })

            })
        }).catch((err) =>
            console.log("error in catch in util ", err)
        )
}



