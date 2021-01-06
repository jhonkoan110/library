import React, { Component } from 'react';
import { connect } from 'react-redux';
import Books from './Books';
import { booksFetchData, booksSetCurrentPage } from '../../redux/books/actions';

class BooksContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            booksPerPage: 10,
        };
    }

    componentDidMount() {
        this.props.fetchData('http://localhost:54407/api/books');
    }

    onPageNumberClickHandler = (event, pageNumber) => {
        this.setState({
            currentPage: pageNumber,
        });
    };

    render() {
        const { currentPage, booksPerPage } = this.state;
        const { books, hasErrored, isLoading } = this.props;

        const indexOfLastBook = currentPage * booksPerPage;
        const indexOfFirstBook = indexOfLastBook - booksPerPage;
        const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
        const booksCount = Math.ceil(books.length / booksPerPage);

        if (hasErrored) {
            return <p>Произошла ошибка при загрузке книг.</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Books
                booksCount={booksCount}
                currentPage={currentPage}
                currentBooks={currentBooks}
                onPageNumberClick={this.onPageNumberClickHandler}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        books: state.books.books,
        hasErrored: state.books.hasErrored,
        isLoading: state.books.isLoading,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(booksFetchData(url)),
        setCurrentPage: (pageNumber) => dispatch(booksSetCurrentPage(pageNumber)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
