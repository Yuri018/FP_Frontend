import { colors } from "styles/colors";
import { Box } from "@mui/system";
import { Auth, Form, IncitingText } from "./styles";
import { useState } from "react";
import { instance } from "../../../utils/axios";
import Header from "components/Header";
import Footer from "components/Footer";
import { GermanMainLogo } from "assets";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  const [username, setEmailLog] = useState("");
  const [password, setPasswordLog] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const userDataReg = {
      username,
      password,
    };

    try {
      const newUser = await instance.post("/user_login/register", userDataReg, {
        headers: { accept: "*/*", "Content-Type": "application/json" }
      });
      console.log("user", newUser.data);
      // После успешной регистрации автоматически выполняем вход
      const response = await instance.post("/auth/login", userDataReg, {
        headers: { accept: "*/*", "Content-Type": "application/json" },
      });
      const { accessToken } = response.data;

      navigate("/user_login/user_account");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };


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
      <Auth>
        <Form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: 560,
              margin: "auto",
              padding: 5,
              borderRadius: 5,
              boxShadow: `5px 5px 10px ${colors.baseGray50}`,
            }}
          >

            <Typography
              variant="h4"
              sx={{ mb: 0, fontFamily: "Montserrat", fontWeight: 500, textAlign: "center" }}
            >
              Регистрация
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 0, fontFamily: "Montserrat", fontWeight: 400, textAlign: "center" }}
            >
              Введите данные для регистрации
            </Typography>
            <TextField
              fullWidth
              margin="dense"
              label="Email"
              variant="outlined"
              placeholder="Введите ваш Email"
              size="small"
              onChange={(e) => setEmailLog(e.target.value)}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Password"
              variant="outlined"
              placeholder="Введите ваш пароль"
              size="small"
              type="password"
              onChange={(e) => setPasswordLog(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{
                width: "80%",
                mt: 2,
                mb: 2,
                fontFamily: "Montserrat",
                padding: 2,
              }}
            >
              Регистрация
            </Button>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat", fontWeight: 400 }}>
              У вас уже есть аккаунт? <IncitingText to="/login">Авторизация</IncitingText>
            </Typography>

          </Box>
        </Form>
      </Auth>
      <Footer />
    </>
  );
}

export default RegisterPage;
