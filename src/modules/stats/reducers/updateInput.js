const updateInput = (state, action) => {
    return {
        ...state,
        input: action.input
    };
};

export default updateInput;
