import { Alert } from "@mui/material";
import React from "react";


class Notifications extends React.Component {

    state = {
        notify: false,
        shouldCompUpdate: true,
    }

    componentDidUpdate() {
        if (this.state.shouldCompUpdate && this.state.notify != this.props.signedUp) {
            this.setState({
                notify: true,
                shouldCompUpdate: true
            })

            setTimeout(() => {
                this.setState({
                    notify: false,
                    shouldCompUpdate: false
                })
            }, 3000);
        }
    }


    render() {
        return (
            <div className="notifs-area">
                {this.state.notify ?
                    < Alert
                        className="alert"
                        severity="success">Signed up successfully!</Alert>
                    : null
                }
            </div>
        )
    }
}

export default Notifications;