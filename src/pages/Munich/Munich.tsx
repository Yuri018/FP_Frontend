import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  MunichImg,
  BerlinLogo,
  MunichLogo,
  FrankfurtLogo,
  DuesseldorfLogo,
  HamburgLogo,
} from "assets"

import Footer from "components/Footer"
import MainMiddlePart from "components/MainMiddlePart"
import { useNavigate } from "react-router-dom"

function Munich() {

  const cityNavLinks = [
    { to: "/berlin/doctors", text: "Врачи" },
    { to: "/berlin/children", text: "Дети" },
    { to: "/berlin/shops", text: "Магазины" },
    { to: "/berlin/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/berlin/services", text: "Услуги" },
  ]

  const navigate = useNavigate()
  const readButtonPath = "/munich"

  const handleReadButton = (path: string) => {
    navigate(readButtonPath)
  }

  return (
    <>
      <Header
        logoImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
        logoText="Мюнхен и Бавария"
        city="Мюнхен"
        HeaderDropDown={true}
        rightNavLinks={cityNavLinks}
      />
      <MainUpperPart
        firstImgDescr={{ src: BerlinLogo, alt: "BerlinLogo" }}
        secondImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
        thirdImgDescr={{ src: FrankfurtLogo, alt: "FrankfurtLogo" }}
        fourthImgDescr={{ src: DuesseldorfLogo, alt: "DuesseldorfLogo" }}
        fifthImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
        firstImgTitle="Берлин"
        secondImgTitle="Мюнхен"
        thirdImgTitle="Франкфурт"
        fourthImgTitle="Дюссельдорф"
        fifthImgTitle="Гамбург"
      />
      <MainMiddlePart
        bcgImgDescr={{ src: MunichImg, alt: "MunichImg" }}
        mainTitle="Новости Мюнхена и Баварии"
        readButtonPath={readButtonPath}
        handleReadButton={handleReadButton}
      />
      <Footer />
    </>
  )
}

export default Munich
