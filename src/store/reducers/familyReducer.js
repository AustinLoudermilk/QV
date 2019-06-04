const initState = {
    families: [
        {lastName: "Loudermilk", numOfMem: "4", isMem: true},
        {lastName: "Dodd", numOfMem: "3", isMem: false}
    ]
}

const familyReducer = (state = initState, action) => {
    return state;
}

export default familyReducer