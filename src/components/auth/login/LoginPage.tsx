import { colors } from "styles/colors";
import { Box } from "@mui/system";
import { Auth, Form, IncitingText } from "./styles";
import { useEffect, useState } from "react";
import { instance } from "../../../utils/axios";
import Header from "components/Header";
import Footer from "components/Footer";
import { GermanMainLogo } from "assets";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user/userSlice";
import { userSelectors } from "../../../store/user/selectors";


function LoginPage() {
  const [username, setEmailLog] = useState("");
  const [password, setPasswordLog] = useState("");
  const dispatch = useDispatch();
  const { authenticated, authorities } = useSelector(userSelectors);

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const userDataLog = {
      username,
      password,
    };

    try {
      const response = await instance.post("/auth/login", userDataLog, {
        headers: { accept: "*/*", "Content-Type": "application/json" }
      });
      const { accessToken } = response.data;
      // Получаем информацию о пользователе после успешной аутентификации
      const userInfoResponse = await instance.get("/auth/get_auth_info");
      // Сохраняем информацию о пользователе в Redux
      dispatch(userActions.setUserInfo(userInfoResponse.data));
      console.log("user data:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  useEffect(() => {
    if (authenticated) {
      const isAdmin = authorities.some((authority) => authority.authority === "ROLE_ADMIN");
      if (isAdmin) {
        navigate("/");
      } else {
        navigate("/user_login/user_account");
      }
    }
  }, [authenticated, authorities, navigate]);


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
              Авторизация
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 0, fontFamily: "Montserrat", fontWeight: 400, textAlign: "center" }}
            >
              Введите ваш логин и пароль
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
              Войти
            </Button>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat", fontWeight: 400 }}>
              У вас нет аккаунта?? <IncitingText to="/user_login/register">Регистрация</IncitingText>
            </Typography>

          </Box>
        </Form>
      </Auth>
      <Footer />
    </>
  );
}

export default LoginPage;
