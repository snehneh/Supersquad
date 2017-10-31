import character_json from '../Data/characters.json';

export function createCharacter(id){
    let characters = character_json.find(item => item.id === id);
    return characters;
}