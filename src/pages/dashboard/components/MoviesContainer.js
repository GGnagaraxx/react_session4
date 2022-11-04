import React from "react";
import { Col, Row, Container, Spinner, Button } from 'react-bootstrap';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

class MoviesContainer extends React.Component {



    render() {
        return (
            <Container>
                {this.props.isLoading ?
                    <>
                        <Spinner
                            className="m-1"
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading Movies...
                    </>
                    :
                    <Row>
                        {
                            this.props.movieList.map((movie) => {
                                return (
                                    <Col className='movie-col' key={movie.imdbID} lg={3} md={4} sm={6} xs={12} >
                                        <Card className="movie-card">
                                            <div className='card-content'>
                                                <CardMedia
                                                    className='img'
                                                    component='img'
                                                    height='140'
                                                    image={movie.Poster}
                                                    alt={movie.Title + ' Poster'} />
                                                <CardContent>
                                                    <Typography
                                                        className="movie-title"
                                                        gutterBottom
                                                        variant='h5'
                                                        component='div'>
                                                        {movie.Title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi,
                                                        enim modi dolore aliquam officiis rem quibusdam inventore accusantium consequuntur?
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                            <div className='btm-overflow-cover'></div>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                }

            </Container>
        )
    }
}

export default MoviesContainer