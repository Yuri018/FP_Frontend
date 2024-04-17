import Header from "components/Header"
import {
  GermanMainLogo,
} from "assets"
import Footer from "components/Footer"

import React, { useState } from 'react';
import InfoCardEdit from 'components/InfoCardEdit';
import { CardActionArea, CardContent, Typography, CardActions, DialogContent } from '@mui/material';
import { MyButton, MyCard, MyCardActions, MyCardContent } from './styles';

import { v4 as uuidv4 } from "uuid"
import { Button } from '@mui/material';
import { MainLowerPartFlex, MainLowerPartItem } from "./styles";
import InfoCardAdd from "components/InfoCardAdd"
import InfoCard from "components/InfoCard/InfoCard"

import { useSelector } from "react-redux"
import { userSelectors } from "../../store/user/selectors";
import { searchSelectors } from "../../store/search/selectors";



function InfoSearchPage() {
  const { searchResults } = useSelector(searchSelectors)


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


      <>
        <MainLowerPartFlex >

          {searchResults.map(info => (
            <MainLowerPartItem key={uuidv4()}>



              <MyCard>
                <DialogContent>
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
                </DialogContent>
                <MyCardActions sx={{ padding: 2 }}>

                </MyCardActions>
              </MyCard>


            </MainLowerPartItem>
          ))}
        </MainLowerPartFlex>


      </>


      <Footer />
    </>
  )
}

export default InfoSearchPage
