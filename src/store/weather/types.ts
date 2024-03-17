export interface WeatherState {
  weatherCard: undefined | WeatherData
  error: undefined | WeatherError
  isLoading: boolean
}

export interface WeatherData {
  temp: string
  // city: string
  date: string
  weatherLogo: string
  id: string
}

export interface WeatherError {
  cod: string
  message: string
}
