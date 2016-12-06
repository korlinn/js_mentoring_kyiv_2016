function validateEmail(emailValue) {
    let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

    if(fieldValue.length < 5) {
        this.setState({passwordError: 'Password should be 5 characters or more'});
        return false;
    }

    this.setState({passwordError: ''});
    return true;
}
