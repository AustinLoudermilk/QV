import authReducer from './authReducer'
import familyReducer from './familyReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth : authReducer,
    family : familyReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
});

export default rootReducer 