import {
  WeatherWrapper,
  WeatherTextContainer,
  WeatherDate,
  WeatherTemp,
  ImgContainer,
  Image,
  Loading,
} from "./styles"

import { useEffect } from "react"
import { weatherSelectorState } from "store/weather/selectors"
import { useSelector, useDispatch } from "react-redux"
import { getWeather, weatherActions } from "store/weather/weatherSlice"
import { AppDispatch } from "store/store"

interface WeatherComponentProps {
  city: string
}

function WeatherComponent({ city }: WeatherComponentProps) {
  const { weatherCard, error, isLoading } = useSelector(weatherSelectorState)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getWeather(city))
    }

    fetchData()

    const intervalId = setInterval(() => {
      fetchData()
    }, 3600000)
  }, [])

  return (
    <WeatherWrapper>
      {isLoading && <Loading>Loading...</Loading>}
      {weatherCard && (
        <>
          <WeatherTextContainer>
            <WeatherDate> {weatherCard?.date} </WeatherDate>
          </WeatherTextContainer>
          <ImgContainer>
            <WeatherTemp>{weatherCard?.temp}</WeatherTemp>
            <Image
              id="weather-icon"
              src={weatherCard?.weatherLogo}
              alt="weather-icon"
            />
          </ImgContainer>
        </>
      )}
    </WeatherWrapper>
  )
}

export default WeatherComponent
