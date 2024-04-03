import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  MunichImg,
  MunichLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,
} from "assets"

import Footer from "components/Footer"

function Munich() {
  return (
    <>
      <Header
        logoImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
        logoText="Мюнхен и Бавария"
        city="Мюнхен"
      />
      <MainUpperPart
        bcgImgDescr={{ src: MunichImg, alt: "MunichImg" }}
        mainTitle="Новости Мюнхена и Баварии"
        firstImgDescr={{ src: Guitars, alt: "Guitars" }}
        secondImgDescr={{ src: Butterfly, alt: "Butterfly" }}
        thirdImgDescr={{ src: TwoPeople, alt: "Two people" }}
        fourthImgDescr={{ src: University, alt: "University" }}
        firstImgTitle="Музыкальные истории"
        secondImgTitle="Загадки природы"
        thirdImgTitle="Жизнь рядом с нами"
        fourthImgTitle="Высшее образование в Германии"
        buttonProps={{
          name: "Читать подробнее",
          onClick: () => {
            console.log("Читать подробнее Munich");
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Munich;
