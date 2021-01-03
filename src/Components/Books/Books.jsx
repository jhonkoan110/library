import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import './Books.css';

const Books = ({ books,  currentPage, booksPerPage, onPageNumberClick }) => {

    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#484848',
                main: '#212121',
                dark: '#000000',
                contrastText: '#fff'
            },
        },
    });

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    return (
        <div>
            <h1 className='books-heading'>Книги</h1>
            <div className='books'> 
                {currentBooks.map(book => {
                    return (
                        <div className='books-item' key={book.id}>
                            <div className='image-container'>
                                <img src='http://2.bp.blogspot.com/-UKfW8tc_wJA/UXTD7Smuq1I/AAAAAAACHbQ/bd9hEgODS6A/s1600/index_23.jpg' alt={book.title}/>
                            </div>
                            <p className='books-item-title'>{book.title}</p>
                            <p className='books-item-author'>{book.bookAuthors[0].author.fio}</p>
                            <p className='books-item-genres'>{book.bookGenres.map(genre => `${genre.genre.title} `)}</p>
                            <p className='books-item-count'>В наличии: {book.count}</p>
                        </div>
                    )
                })}


            </div>
            <ThemeProvider theme={theme}>
                <Pagination 
                        color='primary'
                        shape='rounded'
                        page={currentPage}
                        onChange={onPageNumberClick}
                        showFirstButton 
                        showLastButton
                        boundaryCount={2}
                        count={Math.ceil(books.length / booksPerPage)}
                        siblingCount={1}
                />
            </ThemeProvider>

            {/* <ul className='pagination'>
                <li 
                    className={currentPage === 1 ? 'pagination-item pagination-item-disabled' : 'pagination-item'} 
                    onClick={onPrevPageNumberClick}>
                        &lt;
                </li>

                {pageNumbers.map(number => {
                    return (
                        <li 
                            key={number} 
                            className={currentPage === number ? 'pagination-item-active pagination-item' : 'pagination-item'}
                            id={number} 
                            onClick={onPageNumberClick}
                        >
                            {number}
                        </li>
                    )
                })}

                <li 
                    className={currentPage === pageNumbers.length ? 'pagination-item pagination-item-disabled' : 'pagination-item'} 
                    onClick={onNextPageNumberClick}>
                        &gt;
                </li>
            </ul> */}

        </div>
    )
}

export default Books;