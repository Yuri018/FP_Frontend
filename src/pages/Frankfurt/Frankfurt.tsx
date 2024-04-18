import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  FrankfurtImg,
  FrankfurtLogo,
  BerlinLogo,
  MunichLogo,  
  DuesseldorfLogo,
  HamburgLogo,
} from "assets"

import Footer from "components/Footer"
import MainMiddlePart from "components/MainMiddlePart"
import { useNavigate } from "react-router-dom"

function Frankfurt() {

  const cityNavLinks = [
    { to: "/frankfurt/doctors", text: "Врачи" },
    { to: "/frankfurt/children", text: "Дети" },
    { to: "/frankfurt/shops", text: "Магазины" },
    { to: "/frankfurt/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/frankfurt/services", text: "Услуги" },
  ]

  const navigate = useNavigate()
  const readButtonPath = "/frankfurt"

  const handleReadButton = (path: string) => {
    navigate(readButtonPath)
  }
  return (
    <>
      <Header
        logoImgDescr={{ src: FrankfurtLogo, alt: "FrankfurtLogo" }}
        logoText="Франкфурт"
        cityName="Франкфурт"
        city="frankfurt"
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
        bcgImgDescr={{ src: FrankfurtImg, alt: "FrankfurtImg" }}
        mainTitle="Новости Франкфурта и окрестностей"
        readButtonPath={readButtonPath}
        handleReadButton={handleReadButton}
      />
      <MainLowerPart city="frankfurt" />
      <Footer />
    </>
  )
}

export default Frankfurt
