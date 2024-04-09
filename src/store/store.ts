import {configureStore, Action, ThunkAction, Reducer } from "@reduxjs/toolkit"

import {weatherReducers} from "./weather/weatherSlice"
import { WeatherState } from "./weather/types"

export const store = configureStore({
    reducer: {  
      weatherData: weatherReducers as Reducer<WeatherState>
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

export const makeStore = () => store;

