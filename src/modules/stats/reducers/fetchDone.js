const fetchDone = (state, action) => ({
    ...state,
    isFetching: action.isFetching,
    requestType: action.requestType
});

export default fetchDone;
