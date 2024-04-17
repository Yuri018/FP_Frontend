import { useState, EventHandler, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import MainUpperPart from "components/MainUpperPart"
import Header from "components/Header"
import MainLowerPart from "components/MainLowerPart"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

import { BerlinImg, BerlinLogo } from "assets"

import Footer from "components/Footer"



function Berlin_Main() {
  const cityNavLinks: {
    to: string
    text: string
    dropdown?: {
      text: string
      to: string
    }[]
  }[] = [
    {
      to: "berlin/doctors",
      text: "Врачи",
      dropdown: [
        { text: "Терапевты", to: "/berlin/doctors/therapists" },
        { text: "Стоматологи", to: "/berlin/doctors/dentists" },
        { text: "Педиатры", to: "/berlin/doctors/pediatricians" },
        { text: "Ортопеды", to: "/berlin/doctors/orthopedists" },
        { text: "Кардиологи", to: "/berlin/doctors/cardiologists" },
        { text: "Дерматологи", to: "/berlin/doctors/dermatologists" },
        { text: "Окулисты", to: "/berlin/doctors/oculists" },
      ],
    },   
    { to: "/berlin/children", text: "Дети" },
    { to: "/berlin/shops", text: "Магазины" },
    { to: "/berlin/cafes-restaurants", text: "Кафе и рестораны" },
    { to: "/berlin/services", text: "Услуги" },
  ]

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null)

  const handleTherapists = () => {
    navigate("/berlin/doctors/therapists")
  }
  const handleDentists = () => {
    navigate("/berlin/doctors/dentists")
  }
  const handlePediatricians = () => {
    navigate("/berlin/doctors/pediatricians")
  }

  const handleClick = (event: { currentTarget: SetStateAction<null> }) => {    
    setAnchorEl(event.currentTarget)
  }

 
  const handleClose = () => {
    
    setAnchorEl(null)
  }
     
  return (
    <>
      <Header
        logoImgDescr={{ src: BerlinLogo, alt: "BerlinLogo" }}
        logoText="Берлин и Бранденбург"
        city="Берлин"
        HeaderDropDown={true}
        // rightNavLinks={cityNavLinks}
        rightNavLinks={cityNavLinks.map(link => {
          if (link.dropdown) {
            return {
              ...link,
              onClick: link.dropdown ? handleClick : undefined,
            }
          }
          return link
        })}
      />
      <MainUpperPart
        bcgImgDescr={{ src: BerlinImg, alt: "BerlinImg" }}
        mainTitle="Новости Берлина и Бранденбурга"
        buttonProps={{
          name: "Читать подробнее",
          onClick: () => {
            console.log("Читать подробнее Berlin_Main")
          },
        }}
      />
      <Menu
        id="doctor-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {cityNavLinks.map((link, index) => {
          if (link.to === "berlin/doctors" && link.dropdown) {
            return (
              <>
                <MenuItem
                  key={`${index}-therapists`}
                  onClick={handleTherapists}
                >
                  Терапевты
                </MenuItem>
                <MenuItem key={`${index}-dentists`} onClick={handleDentists}>
                  Стоматологи
                </MenuItem>
                <MenuItem
                  key={`${index}-pediatricians`}
                  onClick={handlePediatricians}
                >
                  Педиатры
                </MenuItem>
              </>
            )
          }
          return null
        })}
      </Menu>
      <MainLowerPart />
      <Footer />
    </>
  )
}

export default Berlin_Main
