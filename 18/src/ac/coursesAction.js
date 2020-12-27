import C from '../constants'
import * as courseApi from '../api/courseApi'

export function loadCoursesAction() {
    return function(dispatch) {
        return courseApi.getCourses().then(courses => {
            dispatch({
                type: C.LOAD_COURSES_SUCCESS,
                payload: courses,
            })
        })
            .catch(err => {
                throw err
            })
    }
}

export const createCourseAction = course => ({
    type: C.CREATE + C.COURSE,
    payload: course,
})
