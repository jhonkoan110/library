import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Books from './Books';
import { booksFetchData, booksSetCurrentPage } from '../../redux/books/actions';

class BooksContainer extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:54407/api/books');
    }

    onPageNumberClick = (event, pageNumber) => {
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        const { books, hasErrored, isLoading, currentPage, booksPerPage } = this.props;

        if (hasErrored) {
            return <p>Произошла ошибка при загрузке книг.</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Books
                books={books}
                booksPerPage={booksPerPage}
                currentPage={currentPage}
                onPageNumberClick={this.onPageNumberClick}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        books: state.books.books,
        hasErrored: state.books.hasErrored,
        isLoading: state.books.isLoading,
        currentPage: state.books.currentPage,
        booksPerPage: state.books.booksPerPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(booksFetchData(url)),
        setCurrentPage: (pageNumber) => dispatch(booksSetCurrentPage(pageNumber)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
