import React, { Component } from 'react';
import { connect } from 'react-redux';
import Genres from './Genres';
import { genresFetchData } from '../../redux/genres/actions';

class GenresContainer extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:54407/api/genres');
    }

    render() {
        const { genres, hasErrored, isLoading } = this.props;

        if (hasErrored) {
            return <p>Во время загрузки данных произошла ошибка..</p>;
        }

        if (isLoading) {
            return <p>Загрузка...</p>;
        }

        return <Genres genres={genres} />;
    }
}

let mapStateToProps = (state) => {
    return {
        genres: state.genres.genres,
        hasErrored: state.genres.hasErrored,
        isLoading: state.genres.isLoading,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(genresFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer);
