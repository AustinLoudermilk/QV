export const createFamily = (family) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        firestore.collection('families').add({
            ...family,
            owner: profile.firstName + " (" + uid + ")",
            dateCreated: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_FAMILY', family });
        }).catch((err) => {
            dispatch({ type: 'CREATE_FAMILY_ERR', err });
        });
    }
}