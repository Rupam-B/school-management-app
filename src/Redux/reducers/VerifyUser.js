const initialStoredValue = localStorage.getItem('verifyTypeOfUser');
const initialParsedValue = initialStoredValue ? JSON.parse(initialStoredValue) : null;
const defaultValue = 0;
const initialState = initialParsedValue !== null ? parseInt(initialParsedValue) : defaultValue;



console.log(initialState)



const VerifyTypeOfUser = (state = initialState, action) => {
    if (action.type === 'Which-User') {

        const newState = action.payload;


        // ------
        localStorage.setItem('verifyTypeOfUser', JSON.stringify(newState));
        return newState;


    } else {
        return state;
    }
}

export default VerifyTypeOfUser;
