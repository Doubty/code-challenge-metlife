import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICharacter} from '../../../types';

interface CharacterState{
    characters: ICharacter[]; 
    favoriteCharacters: ICharacter[]; 
    isLoading: boolean;
    error: string;
    count: number;

}

const initialState: CharacterState = {

    characters: [], 
    favoriteCharacters: [],
    isLoading: false,
    error: '',
    count: 0
}



export const characterSlice = createSlice({
    name: 'character', 
    initialState, 
    reducers:{
       increment(state, action: PayloadAction<number>){
                 state.count += action.payload;
       }, 
       characterFetching(state){

        state.isLoading = true;

       },
       characterFetchingSucess(state, action: PayloadAction<ICharacter[]>){
           state.isLoading = false;
           state.error = '';
           state.characters = action.payload;

    },
    characterFetchingError(state, action: PayloadAction<string>){
        state.isLoading = false;
        state.error = action.payload

    }
    }
});


export default characterSlice.reducer;