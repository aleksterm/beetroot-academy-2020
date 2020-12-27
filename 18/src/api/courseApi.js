import {handleResponse, handleError} from './apiUtils'
const { apiurl } = require('../../package.json')
const baseUrl = apiurl + '/courses'

export function getCourses() {
    return fetch(baseUrl).then(handleResponse).catch(handleError)
}