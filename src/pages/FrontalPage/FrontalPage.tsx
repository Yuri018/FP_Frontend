import { useState } from 'react';

import MainUpperPart from "components/MainUpperPart";
import Header from "components/Header";
import MainLowerPart from "components/MainLowerPart"


import {
  GermanMainImg,
  GermanMainLogo,
  BerlinLogo,
  MunichLogo,
  FrankfurtLogo,
  DuesseldorfLogo,
  HamburgLogo
} from "assets"
import Footer from 'components/Footer';

function FrontalPage() {
  return (
    <>
      <Header
        logoImgDescr={{ src: GermanMainLogo, alt: "GermanMainLogo" }}
        city="Берлин"
        HeaderDropDown={false}
        buttonProps={{
          name: "Выбери свой",
          type: "button",
        }}
      />
      <MainUpperPart
        isGeneralPage={true}
        isMainPage={true}
        bcgImgDescr={{ src: GermanMainImg, alt: "GermanMainImg" }}
        mainTitle="Здесь вы сможете найти полезную для себя информацию по разделам"
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
          name: "Выбери свой город",
          type: "button",
        }}
      />
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default FrontalPage;