import { styled } from "styled-components"

export const WeatherWrapper = styled.div`
  width: 285px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const WeatherTextContainer = styled.div`
  /* width: 150px; */
  height: 25px;
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const WeatherTemp = styled.p`
  color: black;
  font-size: 14px;
  font-family: "Montserrat";
`

export const ImgContainer = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Loading = styled.p`
  color: black;
  font-size: 14px;
  font-family: "Montserrat";
`
