import { createSelector } from 'reselect'

const books = state => state.books;
const categories = state => state.categoriesBooks.categories;

export const booksSelector = createSelector(books, categories, (books, categories) =>
    books.map(book => ({
        ...book,
        categoryName: categories[book.categoryId].title
    }))
)
