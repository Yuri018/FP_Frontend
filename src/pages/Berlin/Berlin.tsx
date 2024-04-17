import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import { BerlinImg, BerlinLogo } from "assets"

import Footer from "components/Footer"

function Berlin() {
  const cityNavLinks = [
    { to: "/berlin/doctors", text: "Врачи" },
    { to: "/berlin/children", text: "Дети" },
    { to: "/berlin/shops", text: "Магазины" },
    { to: "/berlin/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/berlin/services", text: "Услуги" },
  ]

  return (
    <>
      <Header
        logoImgDescr={{ src: BerlinLogo, alt: "BerlinLogo" }}
        logoText="Берлин и Бранденбург"
        city="Берлин"
        HeaderDropDown={true}
        rightNavLinks={cityNavLinks}
      />
      <MainUpperPart
        bcgImgDescr={{ src: BerlinImg, alt: "BerlinImg" }}
        mainTitle="Новости Берлина и Бранденбурга"
        buttonProps={{
          name: "Читать подробнее",
          onClick: () => {
            console.log("Читать подробнее")
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Berlin
