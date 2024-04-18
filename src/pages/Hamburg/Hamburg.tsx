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

function Hamburg() {
  return (
    <>
      <Header
        logoImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
        logoText="Гамбург"
        city="Гамбург"
        HeaderDropDown={true}
      />
      <MainUpperPart
        bcgImgDescr={{ src: HamburgImg, alt: "HamburgImg" }}
        mainTitle="Новости Гамбурга и окрестностей"
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
            console.log("Читать подробнее Hamburg")
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Hamburg
