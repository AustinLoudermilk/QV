const initState = {
    families: [
        {pin: "0001", lastName: "Loudermilk", numOfMem: "4", guests: "1"},
        {pin: "0002", lastName: "Dodd", numOfMem: "3", guests: "4"}
    ]
}

const familyReducer = (state = initState, action) => {
    return state;
}

export default familyReducer