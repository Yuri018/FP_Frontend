import MainUpperPart from "components/MainUpperPart";
import Header from "components/Header";
import MainLowerPart from "components/MainLowerPart"
import { FrontalPageWrapper } from "./styles";

import {
  BerlinMainImg,
  GermanMainLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,
} from "assets"



function FrontalPage(){
  return (
    <FrontalPageWrapper>
      <Header logoImgDescr={{ src: GermanMainLogo, alt: "GermanMainLogo" }} />
      <MainUpperPart
        bcgImgDescr={{ src: BerlinMainImg, alt: "BerlinMainImg" }}
        mainTitle="Здесь вы сможете найти полезную для себя информацию по разделам"
        firstImgDescr={{ src: Guitars, alt: "Guitars" }}
        secondImgDescr={{ src: Butterfly, alt: "Butterfly" }}
        thirdImgDescr={{ src: TwoPeople, alt: "Two people" }}
        fourthImgDescr={{ src: University, alt: "University" }}
        firstImgTitle="Музыкальные истории"
        secondImgTitle="Загадки природы"
        thirdImgTitle="Жизнь рядом с нами"
        fourthImgTitle="Высшее образование в Германии"
        buttonProps={{          
          name: "Выбери свой город",
          onClick: () => {},
        }}
      />
      <MainLowerPart />
    </FrontalPageWrapper>
  )
}

export default FrontalPage;