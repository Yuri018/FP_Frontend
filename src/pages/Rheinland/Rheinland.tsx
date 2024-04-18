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

function Rheinland() {
  return (
    <>
      <Header
        logoImgDescr={{ src: DuesseldorfLogo, alt: "DuesseldorfLogo" }}
        logoText="Дюссельдорф-Кёльн-Бонн"
        city="Дюссельдорф"
        HeaderDropDown={true}
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
      />
      <Footer />
    </>
  )
}

export default Rheinland
