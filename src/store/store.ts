import {configureStore, Action, ThunkAction } from "@reduxjs/toolkit"

import {weatherReducers} from "./weather/weatherSlice"

export const store = configureStore({
    reducer: {  
      weatherData: weatherReducers
    },    
  }) 

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action<string>
>
