import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"

import {
  DuesseldorfImg,
  DuesseldorfLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,
} from "assets"

import { RheinlandPageWrapper } from "./styles"
import Footer from "components/Footer"

function Rheinland() {
  return (
    <RheinlandPageWrapper>
      <Header
        logoImgDescr={{ src: DuesseldorfLogo, alt: "DuesseldorfLogo" }}
        logoText="Дюссельдорф-Кёльн-Бонн"
      />
      <MainUpperPart
        bcgImgDescr={{ src: DuesseldorfImg, alt: "DuesseldorfImg" }}
        mainTitle="Новости Райнланда: Дюссельдорф, Кёльн, Бонн"
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
    </RheinlandPageWrapper>
  )
}

export default Rheinland
