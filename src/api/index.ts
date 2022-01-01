import axios from 'axios';
import {ICharacter} from '../types/index'


export const Api =  axios.create({
    baseURL: 'https://psychonauts-api.herokuapp.com/api'
});


export function getAllCharacters(){
    return Api.get<ICharacter[]>('/characters');

}
