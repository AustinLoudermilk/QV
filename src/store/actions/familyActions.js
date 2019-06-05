export const createFamily = (family) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('families').add({
            firstName: 'jessica',
            lastName: 'loudermilk',
            dateCreated: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_FAMILY', family });
        }).catch((err) => {
            dispatch({ type: 'CREATE_FAMILY_ERR', err });
        });
    }
}