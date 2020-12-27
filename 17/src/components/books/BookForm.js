import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { mapToArr} from "../../utils"
import {Redirect} from 'react-router-dom'
import {addBookAction, editBookAction} from '../../ac/booksAction'
import {booksSelector} from '../../selectors/booksSelector'
import {find} from 'lodash'

const BookForm = ({match, books, categories, addBookAction, editBookAction}) => {
    let currentBook;
    if (match.params.id) {
      currentBook = find(books, item => item._id === match.params.id);
    }

    const [redirect, setRedirect] = useState(false)
    const { register, handleSubmit, errors, control, setError, getValues } = useForm()
    const options = [{value: '-1', label: 'Choose category'}]
    categories.map(cat => options.push({value: cat._id, label: cat.title}))

    function onSubmit(data, e) {
        e.preventDefault()

        if (errors.categoryId) {
            setError('categoryId', errors.categoryId)

            return
        }

        data = {...data, categoryId: data.categoryId.value}

        if (currentBook) {
          editBookAction({_id: currentBook._id, ...data});
        } else {
          addBookAction(data);
        }

        setRedirect(true)
    }

    useEffect(() => {
      register({name: 'categoryId'}, {required: true});
    }, [register])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5">
            {redirect && <Redirect to={'/'} />}
            <div className="form-group">
                <label html-for="title">Title</label>
                <input
                    name="title"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                    defaultValue={currentBook ? currentBook.title : ''}
                />
                {errors.title && "Title is required."}
            </div>
            <div className="form-group">
                <label html-for="desc">Description</label>
                <textarea
                    name="desc"
                    id="title"
                    type="text"
                    className="form-control"
                    ref={register({ required: true })}
                    defaultValue={currentBook ? currentBook.desc : ''}
                />
                {errors.desc && "Description  is required."}
            </div>
            <Controller
                as={<Select options={options}/>}
                control={control}
                onChange={([selected]) => selected }
                name={'categoryId'}
                defaultValue={currentBook ? options[currentBook.categoryId] : options[0]}
            />
            {errors.categoryId && 'Categories  is required.'}

            <div className="form-group">
                <button onClick={() => {
                    const { categoryId } = getValues()

                    if (categoryId.value === '-1') {
                        setError('categoryId', 'No choosen category')
                    }
                }}
                className="btn btn-primary">Submit
                </button>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    const {categories} = state.categoriesBooks
    const books = booksSelector(state);

    return {
        categories: mapToArr(categories),
        books
    }
}

export default connect(mapStateToProps, {addBookAction, editBookAction})(BookForm)
