import React from "react";
import GoogleMapReact from 'google-map-react';
import { Card, CardContent, Typography } from '@mui/material';

const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LocationCard extends React.Component {



    render() {
        return (
            <Card className="locationCard-comp">
                <CardContent className="location-content">
                    <Typography
                        className="txt-center"
                        variant='h1'
                    >
                        Location
                    </Typography>
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="720" height="480" id="gmap_canvas" src="https://maps.google.com/maps?q=One%20Global%20Place,%205th%20Avenue%20&%2025th%20Street,%20BGC,%20Taguig&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                <a href="https://www.whatismyip-address.com"></a>
                                <br />
                            </div>
                        </div>
                </CardContent>
            </Card>
        )
    }
}

export default LocationCard;