import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Authors from './Authors';
import { authorsFetchData } from '../../redux/authors/actions';

class AuthorsContainer extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:54407/api/authors');
    }

    render() {
        const { authors, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return <p>Во время загрузки данных произошла ошибка.</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return <Authors authors={authors} />;
    }
}

const mapStateToProps = (state) => ({
    authors: state.authors.authors,
    hasErrored: state.authors.hasErrored,
    isLoading: state.authors.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    fetchData: (url) => dispatch(authorsFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsContainer);
