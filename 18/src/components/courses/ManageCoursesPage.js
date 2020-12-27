import React, {useState, useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createCourseAction, loadCoursesAction} from '../../ac/coursesAction'
import {loadAuthorsAction} from "../../ac/authorAction";
import CoursesList from './CoursesList'
import {counterAction} from "../../ac/counterActions"

const initForm = {
    title: '',
}

const ManageCoursesPage = ({courses, authors, counter, createCoursesAction, loadCoursesAction, loadAuthorsAction, counterAction}) => {
    const [form, setForm] = useState(initForm)

    useEffect(() => {
        if (courses.length === 0) {
            loadCoursesAction().catch(err => {alert('Loading courses failed')})
        }
    }, [courses.length, loadCoursesAction])

    useEffect(() => {
        if (authors.length === 0) {
            loadAuthorsAction().catch(err => {alert('Loading authors failed')})
        }
    }, [authors.length, loadAuthorsAction])

    const handleChange = e => {
        const {name, value} = e.target

        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        createCoursesAction(form)
        setForm(initForm)
    }

    const memoCourses = useMemo(
        () =>
            courses.map(course => ({
                ...course,
                authorName: authors.find(a => a.id === course.authorId).name
            })),
        [courses, authors]
    )

    return (
        <div className={'container mt-5'}>
            <h1>Courses Page</h1>

            <button onClick={counterAction}>{counter}</button>

            <form onSubmit={handleSubmit} className={'mb-4'}>
                <div className={'form-group'}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={form.title}
                        name={'title'}
                        id={'title'}
                        className={'form-control'}
                    />
                </div>

                <button className={'btn btn-primary'}>Send</button>
            </form>

            {memoCourses.length ? (
                <CoursesList courses={courses}/>
            ): (
                <h1>Loading</h1>
            )}

        </div>
    )
}

ManageCoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourseAction: PropTypes.func.isRequired,
}

ManageCoursesPage.defaultProps = {
    courses: [],
}

function mapStateToProps({courses, authors, counter}) {
    return {
        courses: authors.length === 0 ? [] : courses,
        authors,
        counter
    }
}

export default connect(mapStateToProps, {
  createCourseAction,
  loadCoursesAction,
  loadAuthorsAction,
  counterAction
})(ManageCoursesPage)
