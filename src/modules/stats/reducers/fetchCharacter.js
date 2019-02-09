import assign from 'lodash/assign';

const fetchCharacter = (state, action) => {
    const newState = assign({}, state);
    newState.characters = assign(newState.characters, action.characters);

    return {
        ...newState
    };
};

export default fetchCharacter;
