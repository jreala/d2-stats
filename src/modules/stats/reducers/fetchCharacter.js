import assign from 'lodash/assign';

const fetchCharacter = (state, action) => {
    const newState = assign({}, state, { characters: action.data });

    return {
        ...newState
    };
};

export default fetchCharacter;
