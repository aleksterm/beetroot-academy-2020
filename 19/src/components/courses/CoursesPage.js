import React, {useState, useEffect, useMemo} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {loadCoursesAction} from "../../ac/coursesActions"
import CoursesList from "./CoursesList"
import { Redirect } from 'react-router-dom'
import {loadAuthorsAction} from "../../ac/authorActions"
import Spinner from '../common/Spinner'

const CoursesPage = ({courses, authors, loadCoursesAction, loadAuthorsAction, loading}) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (courses.length === 0) {
            loadCoursesAction().catch(err => console.log("Error ", err.message));
        }
    }, [courses.length, loadCoursesAction]);

    useEffect(() => {
        if (authors.length === 0) {
            loadAuthorsAction().catch(err => console.log("Error ", err.message));
        }
    }, [authors.length, loadAuthorsAction]);

    const memoCourses = useMemo(
        () =>
            courses.map(course => ({
                ...course,
                authorName: authors.find(author => author.id === course.authorId).name,
            })),
        [courses, authors],
    )

    return (
        <div className="container mt-5">
            {redirect && <Redirect to='/course' />}
            <h1>Courses Page</h1>
            {loading && <Spinner />}

            <button onClick={() => setRedirect(true)} className={'btn btn-primary my-3'}>
                Add Course
            </button>

            {memoCourses.length ? (
                <CoursesList courses={memoCourses} />
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    )
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
}

CoursesPage.defaultProps = {
    courses: [],
}

function mapStateToProps(state) {
    const {courses, authors, apiCallsInProgress} = state
    return {
        courses: authors.length === 0 ? [] : courses,
        authors,
        loading: apiCallsInProgress > 0
    }
}

export default connect(mapStateToProps, {
        loadCoursesAction,
        loadAuthorsAction,
    },
)(CoursesPage)
