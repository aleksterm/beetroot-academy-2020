import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Book from './Book'
import {booksSelector} from '../../selectors/booksSelector'

const BooksList = ({books}) => (
    <ul className={'list-group'}>
        {books.map(book => (
            <Book key={book._id} book={book} />
        ))}
    </ul>
)

BooksList.propTypes = {
    books: PropTypes.array,
}

function mapStateToProps(state) {
    const { categoriesBooks, books } = state;

    return {
        books: categoriesBooks.selectedCategory
        ? books.filter(book => book.categoryId === categoriesBooks.selectedCategory)
        : booksSelector(state)
    }
}

export default connect(mapStateToProps)(BooksList)
