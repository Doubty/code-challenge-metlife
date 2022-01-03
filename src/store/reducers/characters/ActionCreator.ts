import { AppDispatch } from "../../store";
import { getAllCharacters } from "../../../api";
import { characterSlice } from "./CharacterSlice";

export const fetchCharacters = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(characterSlice.actions.characterFetching());
    const { data } = await getAllCharacters();
    dispatch(characterSlice.actions.characterFetchingSucess(data));
    console.log(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      dispatch(characterSlice.actions.characterFetchingError(err.message));
    }
  }
};
