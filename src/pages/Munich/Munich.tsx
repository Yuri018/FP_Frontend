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

function Munich() {
  return (
    <>
      <Header
        logoImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
        logoText="Мюнхен и Бавария"
        city="Мюнхен"
        HeaderDropDown={true}
      />
      <MainUpperPart
        bcgImgDescr={{ src: MunichImg, alt: "MunichImg" }}
        mainTitle="Новости Мюнхена и Баварии"
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
            console.log("Читать подробнее Munich")
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Munich;
