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
    { to: "/muenchen/doctors", text: "Врачи" },
    { to: "/muenchen/children", text: "Дети" },
    { to: "/muenchen/shops", text: "Магазины" },
    { to: "/muenchen/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/muenchen/services", text: "Услуги" },
  ]

  const navigate = useNavigate()
  const readButtonPath = "/muenchen"

  const handleReadButton = (path: string) => {
    navigate(readButtonPath)
  }

  return (
    <>
      <Header
        logoImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
        logoText="Мюнхен и Бавария"
        cityName="Мюнхен"
        city="muenchen"
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
      <MainLowerPart city="muenchen" />
      <Footer />
    </>
  )
}

export default Munich
