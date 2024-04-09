import {v4} from "uuid"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import { WeatherState, WeatherData } from "./types"

const weatherInitialState: WeatherState = {
  weatherCard: undefined,
  error: undefined,
  isLoading: false,
}


export const getWeather = createAsyncThunk(
  "WEATHER/getWeather",
  async (inputCity: string, { rejectWithValue }) => {
    const APP_ID: string = "3b16a96f6bb02d14c6afbe8fbbfafbcf"
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${APP_ID}`,
    )
    const result = await response.json()
    if (!response.ok) {
      return rejectWithValue(result)
    }
    return result
  },
)

// Функция для форматирования даты на русский язык
function formatRussianDate(responseDt: number): string {
  const date = new Date(responseDt * 1000);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
}


// const weatherSlice = createSlice({
//   name: "WEATHER",
//   initialState: weatherInitialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//     .addCase(getWeather.pending, (state: WeatherState) => {
//       state.isLoading = true
//       state.weatherCard = undefined
//       state.error = undefined
//     })
//     .addCase(getWeather.fulfilled, (state: WeatherState, {payload}: PayloadAction<any>) => {
//       state.isLoading = false
//       state.weatherCard = {
//         temp: `${Math.round(payload.main.temp - 273.15)}°`,
//         weatherLogo: `http://openweathermap.org/img/w/${payload.weather[0].icon}.png`,
//         date: formatRussianDate(payload.dt),
//         id: v4()
//       }
//     })
//     .addCase(getWeather.rejected, (state: WeatherState, {payload}: PayloadAction<any>) => {
//       state.isLoading = false
//       state.error = {
//         cod: payload.cod, 
//         message: payload.message
//       }
//     })
//   }
// })

const weatherSlice = createSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeather.pending, state => {
        return {
          ...state,
          isLoading: true,
          weatherCard: undefined,
          error: undefined,
        }
      })
      .addCase(
        getWeather.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: false,
            weatherCard: {
              temp: `${Math.round(payload.main.temp - 273.15)}°`,
              weatherLogo: `http://openweathermap.org/img/w/${payload.weather[0].icon}.png`,
              date: formatRussianDate(payload.dt),
              id: v4(),
            },
          }
        },
      )
      .addCase(
        getWeather.rejected,
        (state, { payload }: PayloadAction<any>) => {
          return {
            ...state,
            isLoading: false,
            error: {
              cod: payload.cod,
              message: payload.message,
            },
          }
        },
      )
  },
})

export const weatherActions = weatherSlice.actions

export const weatherReducers = weatherSlice.reducer