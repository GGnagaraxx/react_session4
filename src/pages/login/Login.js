import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import { ConfirmPasswordValidation, EmailValidation, PasswordValidation, UsernameValidation } from "../../common/functions/Validator";


class Login extends React.Component {

    state = {
        userInput: {
            username: '',
            email: '',
            password: '',
            confirmPass: '',
        },
        errors: {
            username: false,
            email: false,
            password: false,
            confirmPass: false,
        },
    }

    checkValidation = (input, inputType) => {

        return new Promise((resolve, reject) => {
            let resp
            let error = false;
            let isValid = true;

            if (inputType == 'username') {
                resp = UsernameValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'email') {
                resp = EmailValidation(input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'password') {
                resp = PasswordValidation(input)
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            } else if (inputType == 'confirmPass') {
                resp = ConfirmPasswordValidation(this.state.userInput.password, input);
                if (!resp.valid) {
                    error = resp.err;
                    isValid = false;
                } else {
                    error = false;
                }

            }

            this.setState({
                ...this.state,
                userInput: {
                    ...this.state.userInput,
                    [inputType]: input,
                },
                errors: {
                    ...this.state.errors,
                    [inputType]: error,
                },
            })

            resolve(isValid);
        })

    }

    handleChange = (e) => {
        const input = e.target.value;
        const inputType = e.target.name;

        this.checkValidation(input, inputType)
    }

    handleDateChange = (dateValue) => {
        const d = new Date(dateValue);

        this.checkValidation(d, 'dob');
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;

        if (!await this.checkValidation(this.state.userInput.name, 'name')) valid = false;
        if (!await this.checkValidation(this.state.userInput.dob, 'dob')) valid = false;
        if (!await this.checkValidation(this.state.userInput.email, 'email')) valid = false;
        if (!await this.checkValidation(this.state.userInput.contactNum, 'contactNum')) valid = false;
        if (!await this.checkValidation(this.state.userInput.desc, 'desc')) valid = false;

        console.log("Valid: ", this.state.userInput);
        this.props.setSignedUp();
        this.setState({
            userInput: {
                name: '',
                dob: new Date(),
                email: '',
                contactNum: '',
                desc: ''
            },
            errors: {
                name: false,
                dob: false,
                email: false,
                contactNum: false,
                desc: false
            },
        })
    }

    render() {
        return (
            <Box component="div" className="cust-box p-2 m-2">
                <Typography
                    gutterBottom
                    className="txt-center comp-title"
                    variant='h3'
                    component='div'>
                    Login
                </Typography>
                <Form onSubmit={this.handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            className="m-1 fw"
                            id="outlined-name"
                            name="username"
                            label="Username"
                            placeholder="Enter your username"
                            required
                            error={this.state.errors.username ? true : false}
                            helperText={this.state.errors.username ? this.state.errors.username : null}
                            value={this.state.userInput.username}
                            onChange={this.handleChange}
                        />
                        <TextField
                            className="m-1 fw"
                            id="outlined-name"
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            required
                            error={this.state.errors.email ? true : false}
                            helperText={this.state.errors.email ? this.state.errors.email : null}
                            value={this.state.userInput.email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            className="m-1 fw"
                            id="outlined-name"
                            type='password'
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            required
                            error={this.state.errors.password ? true : false}
                            helperText={this.state.errors.password ? this.state.errors.password : null}
                            value={this.state.userInput.password}
                            onChange={this.handleChange}
                        />
                        <TextField
                            className="m-1 fw"
                            id="outlined-name"
                            type='password'
                            name="confirmPass"
                            label="Confirm Password"
                            placeholder="Confirm your Password"
                            required
                            error={this.state.errors.confirmPass ? true : false}
                            helperText={this.state.errors.confirmPass ? this.state.errors.confirmPass : null}
                            value={this.state.userInput.confirmPass}
                            onChange={this.handleChange}
                        />
                        <Button
                            type='submit'
                            className="submit-btn m-2"
                            variant="contained">Sign Up</Button>
                    </Stack>
                </Form>
            </Box>
        )
    }
}

export default Login;