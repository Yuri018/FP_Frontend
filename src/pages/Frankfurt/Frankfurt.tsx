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

function Frankfurt() {
  return (
    <>
      <Header
        logoImgDescr={{ src: FrankfurtLogo, alt: "FrankfurtLogo" }}
        logoText="Франкфурт"
        city="Франкфурт"
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
        bcgImgDescr={{ src: FrankfurtImg, alt: "BerlinImg" }}
        mainTitle="Новости Франкфурта и окрестностей"
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Frankfurt
