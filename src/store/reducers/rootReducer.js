import authReducer from './authReducer'
import familyReducer from './familyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth : authReducer,
    project : familyReducer
});

export default rootReducer