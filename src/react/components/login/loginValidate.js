function validateEmail(emailValue) {
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regExp.test(emailValue);
}

export function emailFieldValidation(field) {
    let fieldValue = field.value;

    if(fieldValue.trim() === '') {
        this.setState({emailError: 'Email is required'});
        return false;
    }
    if(!validateEmail(fieldValue)) {
        this.setState({emailError: 'Incorrect email format'});
        return false;
    }
    this.setState({emailError: ''});
    return true;
}

export function passwordFieldValidation(field) {
    let fieldValue = field.value;

    if(fieldValue.trim() === '') {
        this.setState({passwordError: 'Password is required'});
        return false;
    }

    if(fieldValue.length < 6) {
        this.setState({passwordError: 'Password should be 6 characters or more'});
        return false;
    }

    this.setState({passwordError: ''});
    return true;
}
