export const manageFamily = (family) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        firestore.collection('users').doc(uid).set({
            ...profile,
            members: family.members
        }).then(() => {
            dispatch({ type: 'FAMILY_UPDATE', family });
        }).catch((err) => {
            dispatch({ type: 'FAMILY_UPDATE_ERR', err });
        });
    }
}