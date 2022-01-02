import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../../types";

interface CharacterState {
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
  error: "",
  count: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    adicionarFavorito(state, action: PayloadAction<ICharacter>) {
      state.favoriteCharacters.push(action.payload);
      state.characters = state.characters.filter(
        (item) => item._id !== action.payload._id
      );
    },
    removerFavoritos(state, action: PayloadAction<ICharacter>) {
      state.characters.push(action.payload);
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (item) => item._id !== action.payload._id
      );
    },
    characterFetching(state) {
      state.isLoading = true;
    },
    characterFetchingSucess(state, action: PayloadAction<ICharacter[]>) {
      state.isLoading = false;
      state.error = "";
      state.characters = action.payload;
    },
    characterFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default characterSlice.reducer;
