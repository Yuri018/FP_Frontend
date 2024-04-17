import { styled } from "styled-components"

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  width: 330px;
`

export const WeatherTextContainer = styled.div`
  /* width: 150px; */
  height: 25px;
  padding-right: 15px;
  display: flex;
  align-items: center;
`

export const WeatherDate = styled.p`
  color: black;
  font-size: 14px;
  font-family: "Montserrat";
`

export const WeatherTemp = styled.p`
  color: black;
  font-size: 18px;
  font-weight: bold;
  font-family: "Montserrat";
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const Loading = styled.p`
  color: black;
  font-size: 14px;
  font-family: "Montserrat";
`
