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
        bcgImgDescr={{ src: FrankfurtImg, alt: "FrankfurtImg" }}
        mainTitle="Новости Франкфурта и окрестностей"
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
        buttonProps={{
          name: "Читать подробнее",
          onClick: () => {
            console.log("Читать подробнее Frankfurt")
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Frankfurt
