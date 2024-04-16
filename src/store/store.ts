import {configureStore, Action, ThunkAction, Reducer } from "@reduxjs/toolkit"

import {weatherReducers} from "./weather/weatherSlice"
import { WeatherState } from "./weather/types"
import { userReducers } from "./user/userSlice";
import { UserState } from "./user/types";

export const store = configureStore({
    reducer: {  
      weatherData: weatherReducers as Reducer<WeatherState>,
      userData: userReducers as Reducer<UserState>
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

