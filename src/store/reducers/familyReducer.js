const initState = {
    families: [
    ]
}

const familyReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FAMILY_UPDATE':
            console.log('updated family: ', action.family);
            return state;
        case 'FAMILY_UPDATE_ERR':
            console.log('updating family error: ', action.err);
            return state;
        default:
            return state;
    } 
}

export default familyReducer