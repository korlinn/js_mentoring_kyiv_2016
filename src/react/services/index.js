import thunk from 'redux-thunk'

export const loginService = (requestData) => {
    return dispatch => {
        dispatch(submitLoginForm());
        fetch('/user/authenticate', (response) => {
            dispatch(doneFetchingBook()); // Hide loading spinner
            if(response.status == 200){
                dispatch(setBook(response.json)); // Use a normal function to set the received state
            }else {
                dispatch(someError)
            }
        })
    }
}

export const loginService = (requestData) => {
    return function(dispatch) {
        dispatch(submitLoginForm());
        return new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    if(requestData.email && requestData.password) {
                        return resolve({
                            email: requestData.email,
                            userName: 'User'
                        });
                    }
                    return reject(new Error('Please fiil in form fields correctly'));
                }, 1000);

            }
        ).then((data) =>
            {dispatch(receiveData(data));
                browserHistory.push('/')},
            (error) => {
                dispatch(receiveDataError(error));
            } )
    }
};
