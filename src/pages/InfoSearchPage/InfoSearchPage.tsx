import React from 'react';
import { useSelector } from 'react-redux';
import { searchSelectors } from '../../store/search/selectors';
import { GermanMainLogo } from 'assets';
import { Typography, Grid, Card, CardContent, CardActions } from '@mui/material';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { styled } from '@mui/system';

const MainLowerPartFlex = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const MainLowerPartItem = styled(Grid)({
  width: 'calc(25% - 20px)', // Adjusting for margin
  margin: '10px',
});

const InfoCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

function InfoSearchPage() {
  const { searchResults } = useSelector(searchSelectors);

  return (
    <>
      <Header
        logoImgDescr={{ src: GermanMainLogo, alt: 'GermanMainLogo' }}
        city="Берлин"
      />

      <MainLowerPartFlex container spacing={2}>
        {searchResults.map((info, index) => (
          <MainLowerPartItem key={index} item>
            <InfoCard>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {info.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {info.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <br />
                  <b>Адрес:</b> {info.address}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Тел.:</b> {info.tel}
                </Typography>
                {info.link && (
                  <Typography variant="body2" color="textSecondary" component="p">
                    <b>Сайт:</b> {info.link}
                  </Typography>
                )}
              </CardContent>
              <CardActions sx={{ padding: 2 }} />
            </InfoCard>
          </MainLowerPartItem>
        ))}
      </MainLowerPartFlex>

      <Footer />
    </>
  );
}

export default InfoSearchPage;
        










//       />
//       <MainUpperPart
//         firstImgDescr={{ src: BerlinLogo, alt: "BerlinLogo" }}
//         secondImgDescr={{ src: MunichLogo, alt: "MunichLogo" }}
//         thirdImgDescr={{ src: FrankfurtLogo, alt: "FrankfurtLogo" }}
//         fourthImgDescr={{ src: DuesseldorfLogo, alt: "DuesseldorfLogo" }}
//         fifthImgDescr={{ src: HamburgLogo, alt: "HamburgLogo" }}
//         firstImgTitle="Берлин"
//         secondImgTitle="Мюнхен"
//         thirdImgTitle="Франкфурт"
//         fourthImgTitle="Дюссельдорф"
//         fifthImgTitle="Гамбург"
//         isGeneralPage={false}
//       />
//       <MainLowerPart />
//       <Footer />
//     </>
//   );
// }

// export default InfoSearchPage;
