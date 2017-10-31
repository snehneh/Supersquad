import character_json from '../Data/characters.json';
import {ADD_CHARACTER , REMOVE_CHARACTER} from '../Actions';
import {createCharacter} from './helpers';

function characters(state = character_json, action){
    switch(action.type){
        case ADD_CHARACTER:
        let characters = state.filter(item => item.id !== action.id);
        return characters;

        case REMOVE_CHARACTER:
        let charac = [...state, createCharacter(action.id)];
        return charac;

        default:
        return state;
    }
}

export default characters;