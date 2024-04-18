import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  HamburgImg,
  BerlinLogo,
  MunichLogo,
  FrankfurtLogo,
  DuesseldorfLogo,
  HamburgLogo,
} from "assets"

import Footer from "components/Footer"
import MainMiddlePart from "components/MainMiddlePart"
import { useNavigate } from "react-router-dom"

function Hamburg() {

  const cityNavLinks = [
    { to: "/hamburg/doctors", text: "Врачи" },
    { to: "/hamburg/children", text: "Дети" },
    { to: "/hamburg/shops", text: "Магазины" },
    { to: "/hamburg/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/hamburg/services", text: "Услуги" },
  ]

  const navigate = useNavigate()
  const readButtonPath = "/hamburg"

  const handleReadButton = (path: string) => {
    navigate(readButtonPath)
  }
  
  return (
    <>
      <Header
        logoImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
        logoText="Гамбург"
        cityName="Гамбург"
        city="hamburg"
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
        bcgImgDescr={{ src: HamburgImg, alt: "HamburgImg" }}
        mainTitle="Новости Гамбурга и окрестностей"
        readButtonPath={readButtonPath}
        handleReadButton={handleReadButton}
      />
      <MainLowerPart city="hamburg" />
      <Footer />
    </>
  )
}

export default Hamburg
