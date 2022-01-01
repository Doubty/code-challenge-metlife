import { combineReducers, configureStore } from "@reduxjs/toolkit";
import characterReducer from './reducers/characters/CharacterSlice';

const rootReducer = combineReducers({
    characterReducer
})

export const setupStore = ( ) => {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']