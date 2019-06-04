export const createFamily = (family) => {
    return (dispatch, getState) => {
        //make async call to database

        dispatch({ type: 'CREATE_FAMILY', family });
    }
}