import { Component } from "react";
import { connect } from "react-redux";
import { booksFetchData, booksSetCurrentPage } from "../../redux/books/actions";
// import { booksFetchData, booksSetCurrentPage } from "../../redux/actions/books-actions";
import Books from "./Books";


class BooksContainer extends Component {    

    componentDidMount() {        
        this.props.fetchData('http://localhost:54407/api/books');
    }

    // onNextPageNumberClick = () => {
    //     const currentPage = this.props.currentPage;
    //     const booksAmount = this.props.books.length;
    //     if (currentPage < booksAmount) {
    //         const incrementedCurrentPage = currentPage + 1;        
    //         this.props.setCurrentPage(incrementedCurrentPage);
    //     }
    // }

    // onPrevPageNumberClick = () => {
    //     const currentPage = this.props.currentPage;
    //     if (currentPage > 1) {
    //         const decrementedCurrentPage = currentPage - 1;
    //         this.props.setCurrentPage(decrementedCurrentPage);
    //     }

    // }

    onPageNumberClick = (event, pageNumber) => {
        this.props.setCurrentPage(pageNumber);
    }
    
    render () {

        const { books, hasErrored, isLoading, currentPage, booksPerPage } = this.props;
        
        if (hasErrored) {
            return <p>Произошла какая-то ошибка при загрузке книг.</p>
        }

        if (isLoading) {
            return <p>Loading...</p>
        }

        return <Books 
                    books={books}
                    booksPerPage={booksPerPage}
                    currentPage={currentPage}
                    onPageNumberClick={this.onPageNumberClick}
                    // onNextPageNumberClick={this.onNextPageNumberClick}
                    // onPrevPageNumberClick={this.onPrevPageNumberClick}
                />
    }
}

let mapStateToProps = state => {
    return {
        books: state.books.books,
        hasErrored: state.books.hasErrored,
        isLoading: state.books.isLoading,
        currentPage: state.books.currentPage,
        booksPerPage: state.books.booksPerPage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(booksFetchData(url)),
        setCurrentPage: pageNumber => dispatch(booksSetCurrentPage(pageNumber))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);