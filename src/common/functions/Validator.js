const patterns = {
    name: /^[a-z]{3,}([" "][a-z]{3,})*$/,
    contactNum: /^[0-9]{10}/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    username: /^([a-zA-Z]|[_]){1}([a-z]|[A-Z]|[_]|[0-9]){7,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_])[A-Za-z\d@$!%*?&\-_]{8,}$/
}

function NameValidation(name){
    let retVal = {
        valid: false,
        err: '',
        errDetail: '',
    }

    if(name==null || !name.trim().length){
        retVal.err = 'Name is required';
        retVal.errDetail = retVal.err;
    } else if(patterns.name.test(name.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Name';
        retVal.errDetail = 'Name must contain at least 3 letters and can only contain letters.';
    }

    return retVal;
}

function UsernameValidation(username){
    let retVal = {
        valid: false,
        err: '',
        errDetail: '',
    }

    if(username==null || !username.trim().length){
        retVal.err = 'Username is required';
        retVal.errDetail = retVal.err;
    } else if(patterns.username.test(username.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Username';
        retVal.errDetail = 'Username needs to start with a letter or an underscore, and can only contain letters, underscores and numbers.'
    }

    return retVal;
}

function PasswordValidation(password){
    let retVal = {
        valid: false,
        err: '',
        errDetail: '',
    }

    if(password==null || !password.trim().length){
        retVal.err = 'Password is required';
        retVal.errDetail = retVal.err;
    } else if(patterns.password.test(password.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Password';
        retVal.errDetail = 'Password must be at least 8 characters, 1 Uppercase letter, 1 Lowercase letter, 1 number, 1 special character'
    }

    return retVal;
}

function ConfirmPasswordValidation(password, confirmPass){
    let retVal = {
        valid: false,
        err: '',
        errDetail: ''
    }

    if(confirmPass==null || !confirmPass.trim().length){
        retVal.err = 'Password confirmation is required';
        retVal.errDetail = retVal.err;
    } else if(password === confirmPass){
        retVal.valid = true;
    } else {
        retVal.err = 'Confirm password incorrect';
        retVal.errDetail = retVal.err;
    }

    return retVal;
}

function EmailValidation(email){
    let retVal = {
        valid: false,
        err: '',
        errDetail: '',
    }

    if(email==null || !email.trim().length){
        retVal.err = 'Email is required';
        retVal.errDetail = retVal.err;
    } else if(patterns.email.test(email.trim().toLowerCase())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Email';
        retVal.errDetail = retVal.err;
    }

    return retVal;
}

function ContactNumValidation(num){
    let retVal = {
        valid: false,
        err: '',
        errDetail: '',
    }

    if(num==null || !num.trim().length){
        retVal.err = 'Contact Number is required';
        retVal.errDetail = retVal.err;
    } else if(patterns.contactNum.test(num.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Contact Number';
        retVal.errDetail = retVal.err;
    }

    return retVal;
}

function DoBValidation(dob){
    let retVal = {
        valid: false,
        err: '',
        errDetail: '',
    }

    if(!dob || dob == ''){
        retVal.err = 'DoB is required';
        retVal.errDetail = retVal.err;
    } else if(dob < new Date()){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Date of Birth';
        retVal.errDetail = retVal.err;
    }

    return retVal;
}

function isInputEmpty(input){
    let isEmpty = true;

    if(input && input != ''){
        isEmpty = false;
    }

    return isEmpty;
}


export {
    NameValidation,
    EmailValidation,
    ContactNumValidation,
    DoBValidation,
    UsernameValidation,
    PasswordValidation,
    ConfirmPasswordValidation,
    isInputEmpty
}