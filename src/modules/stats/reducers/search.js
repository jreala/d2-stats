const search = (state, action) => {
    const payload = action.payload;

    return {
        ...state,
        payload
    };
};

export default search;
