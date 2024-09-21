
import axios from 'axios'

const httpService = axios.create({
    baseURL: 'https://monkfish-app-z9uza.ondigitalocean.app',
    headers: {
        'Content-Type': 'application/json',
    }
})

export function setDefaultHeaders(token) {
    if (token) {
        httpService.defaults.headers.common['x-auth-token'] = token
    } else {
        console.warn('Token is undefined, cannot set default headers')
        delete httpService.defaults.headers.common['x-auth-token']
    }
}

export function setToken(token) {
    localStorage.setItem('authToken', token)
    setDefaultHeaders(token)
}

export function clearToken() {
    localStorage.removeItem('authToken')
    setDefaultHeaders(null)
}

export default {
    get: (url, config) => httpService.get(url, config),
    post: (url, data, config) => httpService.post(url, data, config),
    put: (url, data, config) => httpService.put(url, data, config),
    patch: (url, data, config) => httpService.patch(url, data, config),
    delete: (url, config) => httpService.delete(url, config),
    setDefaultHeaders,
    setToken,
    clearToken
}
