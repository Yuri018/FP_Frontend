import { useSelector } from "react-redux"
import { searchSelectors } from "../../store/search/selectors"
import { GermanMainLogo } from "assets"
import { Typography, CardContent, CardActions } from "@mui/material"
import Header from "components/Header"
import Footer from "components/Footer"
import { MainLowerPartFlex, MainLowerPartItem, InfoCard, MainLowerPartContainer } from "./styles"
import MainUpperPart from "components/MainUpperPart"

import {
  BerlinImg,
  BerlinLogo,  
  MunichLogo,
  FrankfurtLogo,
  DuesseldorfLogo,
  HamburgLogo,
} from "assets"

function InfoSearchPage() {
  const { searchResults } = useSelector(searchSelectors)

  return (
    <>
      <Header
        logoImgDescr={{ src: GermanMainLogo, alt: "GermanMainLogo" }}
        city="Берлин"
      />
      <MainUpperPart
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
      />
      <MainLowerPartContainer>
        <MainLowerPartFlex>
          {searchResults.map((info, index) => (
            <MainLowerPartItem key={index}>
              <InfoCard>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {info.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    <b>Адрес:</b> {info.address}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>Тел.:</b> {info.tel}
                  </Typography>
                  {info.link && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <b>Сайт:</b> {info.link}
                    </Typography>
                  )}
                </CardContent>
                <CardActions sx={{ padding: 2 }} />
              </InfoCard>
            </MainLowerPartItem>
          ))}
        </MainLowerPartFlex>
      </MainLowerPartContainer>
      <Footer />
    </>
  )
}

export default InfoSearchPage