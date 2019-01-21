const search = (state, action) => {
    console.log(action);
    const data = action.data;

    return {
        ...state,
        data
    };
};

export default search;
