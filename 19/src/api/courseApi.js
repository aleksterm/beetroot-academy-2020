import { handleResponse, handleError } from "./apiUtils";
const { apiurl } = require("../../package.json");
const baseUrl = apiurl + "/courses/";

export function getCourses() {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCourse(course) {
    return fetch(baseUrl + (course.id || ''), {
        method: course.id ? 'PUT': 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(course)
    })
        .then(handleResponse)
        .catch(handleError)
}
