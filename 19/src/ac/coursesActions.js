import C from "../constants"
import * as courseApi from "../api/courseApi"
import {beginApiCall, apiCallError} from "./apiStatusActions";

export function loadCoursesAction() {
    return function(dispatch) {
        dispatch(beginApiCall())

        return courseApi.getCourses().then(courses => {
            dispatch({
                type: C.LOAD_COURSES_SUCCESS,
                payload: courses,
            })
        })
            .catch(err => {
                dispatch(apiCallError(err))
                throw err
            })
    }
}

function updateSuccessCourse(course) {
    return {type: C.UPDATE_COURSE_SUCCESS, payload: course}
}

function createSuccessCourse(course) {
    return {type: C.CREATE_COURSE_SUCCESS, payload: course}
}

export function saveCoursesAction(course) {
    return function(dispatch) {
        dispatch(beginApiCall())

        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateSuccessCourse(savedCourse))
                    : dispatch(createSuccessCourse(savedCourse))
            })
            .catch(err => {
                dispatch(apiCallError(err))
                throw err
            })
    }
}

export const createCourseAction = course => ({
    type: C.CREATE + C.COURSE,
    payload: course
});
