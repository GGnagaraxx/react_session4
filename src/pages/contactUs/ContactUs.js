import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import DialpadIcon from '@mui/icons-material/Dialpad';
import LocationCard from './components/LocationCard';

class ContactUs extends React.Component{



    render(){
        return(
            <Box 
                className='contactUs-comp, cust-box'
                component="div" 
                sx={{ 
                    p: 2, 
                }}
            >
                <Typography
                    className='comp-title txt-center'
                    variant='h1'
                >
                    Contact Us
                </Typography>
                <Container>
                    <Row>
                        <Col className='p-2' xs={12} md={6}>
                            <Card>
                                <CardContent
                                    className='d-flex center'   
                                >
                                    <EmailIcon 
                                        className='mr-1'
                                        fontSize='large'/>
                                    <Typography
                                        variant='h6'
                                    >
                                        sample.email@sample.com
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col className='p-2' xs={12} md={6}>
                            <Card>
                                <CardContent
                                    className='d-flex center'   
                                >
                                    <DialpadIcon 
                                        className='mr-1'
                                        fontSize='large'/>
                                    <Typography
                                        variant='h6'
                                    >
                                        0123456789
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col className='p-2' xs={12}>
                            <LocationCard/>
                        </Col>
                    </Row>
                </Container>
            </Box>
        )
    }
}


export default ContactUs;