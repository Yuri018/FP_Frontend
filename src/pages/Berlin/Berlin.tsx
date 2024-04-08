import MainUpperPart from "components/MainUpperPart";
import Header from "components/Header";
import MainLowerPart from "components/MainLowerPart";

import {
  BerlinImg,
  BerlinLogo,
  Guitars,
  Butterfly,
  TwoPeople,
  University,
} from "assets"

import Footer from "components/Footer";

function Berlin() {
  return (
    <>
      <Header
        logoImgDescr={{ src: BerlinLogo, alt: "BerlinLogo" }}
        logoText="Берлин и Бранденбург"
        city="Берлин"
        HeaderDropDown={true}

      />
      <MainUpperPart
        bcgImgDescr={{ src: BerlinImg, alt: "BerlinImg" }}
        mainTitle="Новости Берлина и Бранденбурга"
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
            console.log("Читать подробнее Berlin");
          },
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Berlin
