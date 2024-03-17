import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  HamburgImg,
  HamburgLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,  
} from "assets"

import { HamburgtPageWrapper } from "./styles"
import Footer from "components/Footer"

function Hamburg() {
  return (
    <HamburgtPageWrapper>
      <Header
        logoImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
        logoText="Гамбург"
        city="Гамбург"
      />
      <MainUpperPart
        bcgImgDescr={{ src: HamburgImg, alt: "HamburgImg" }}
        mainTitle="Новости Гамбурга и окрестностей"
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
          onClick: () => {},
        }}
      />
      <MainLowerPart />
      <Footer />
    </HamburgtPageWrapper>
  )
}

export default Hamburg
