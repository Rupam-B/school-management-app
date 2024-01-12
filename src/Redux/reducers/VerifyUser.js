
const initialState = 0;

const VerifyTypeOfUser = (state = initialState, action) => {
    if (action.type === 'Which-User') {
        return action.payload;
    } else {
        return state;
    }
}

export default VerifyTypeOfUser;
