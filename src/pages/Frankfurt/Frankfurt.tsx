import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  FrankfurtImg,
  FrankfurtLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,
} from "assets"

import { FrankfurtPageWrapper } from "./styles"

function Frankfurt() {
  return (
    <FrankfurtPageWrapper>
      <Header
        logoImgDescr={{ src: FrankfurtLogo, alt: "FrankfurtLogo" }}
        logoText="Франкфурт"
      />
      <MainUpperPart
        bcgImgDescr={{ src: FrankfurtImg, alt: "FrankfurtImg" }}
        mainTitle="Новости Франкфурта и окрестностей"
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
    </FrankfurtPageWrapper>
  )
}

export default Frankfurt
