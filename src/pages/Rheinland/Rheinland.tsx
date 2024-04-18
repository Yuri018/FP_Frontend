import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  DuesseldorfImg,
  BerlinLogo,
  MunichLogo,
  FrankfurtLogo,
  DuesseldorfLogo,
  HamburgLogo,
} from "assets"

import Footer from "components/Footer"
import MainMiddlePart from "components/MainMiddlePart"
import { useNavigate } from "react-router-dom"

function Rheinland() {

  const cityNavLinks = [
    { to: "/dusseldorf/doctors", text: "Врачи" },
    { to: "/dusseldorf/children", text: "Дети" },
    { to: "/dusseldorf/shops", text: "Магазины" },
    { to: "/dusseldorf/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/dusseldorf/services", text: "Услуги" },
  ]

  const navigate = useNavigate()
  const readButtonPath = "/dusseldorf"

  const handleReadButton = (path: string) => {
    navigate(readButtonPath)
  }

  return (
    <>
      <Header
        logoImgDescr={{ src: DuesseldorfLogo, alt: "DuesseldorfLogo" }}
        logoText="Дюссельдорф-Кёльн-Бонн"
        cityName="Дюссельдорф"
        city="dusseldorf"
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
        bcgImgDescr={{ src: DuesseldorfImg, alt: "DuesseldorfImg" }}
        mainTitle="Новости Райнланда: Дюссельдорф, Кёльн, Бонн"
        readButtonPath={readButtonPath}
        handleReadButton={handleReadButton}
      />
      <MainLowerPart city="dusseldorf" />
      <Footer />
    </>
  )
}

export default Rheinland
