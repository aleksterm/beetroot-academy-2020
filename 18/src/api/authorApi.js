import { handleResponse, handleError } from './apiUtils'
const { apiurl } = require('../../package.json')
const baseUrl = apiurl + '/authors'

export function getAuthors() {debugger
    return fetch(baseUrl).then(handleResponse).catch(handleError)
}
