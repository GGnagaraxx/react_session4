import React from 'react';
import { Box, Typography } from '@mui/material';
import MoviesContainer from './components/MoviesContainer';

import { getMovies } from '../../api/movieApi';


class Dashboard extends React.Component {

    state = {
        movies: [],
        isLoading: true
    }

    componentDidMount() {

        this.setState({
            ...this.state,
            isLoading: true
        })
        getMovies().then((resp) => {
            this.setState({
                movies: resp,
                isLoading: false
            })
        }).catch((err) => {
            console.log(err)
            this.setState({
                ...this.state,
                isLoading: false
            })
        })
    }

    render() {
        return (
            <div className='movies-comp'>
                <Box
                    className="movies-comp cust-box"
                    component='div'>
                    <Typography
                        className="txt-center comp-title"
                        variant='h1'
                        component='div'>
                        Movies
                    </Typography>
                    <MoviesContainer movieList={this.state.movies} isLoading={this.state.isLoading}/>
                </Box>
            </div>
        )
    }

}

export default Dashboard;