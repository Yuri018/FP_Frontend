import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "styles/colors";
import LoginPage from "./login/Login";
import RegisterPage from "./register/Register";
import { Box } from "@mui/system";
import { Auth, Form } from "./styles";
import { useState, useEffect } from "react";
import { instance } from "../../utils/axios";
import Header from "components/Header";
import Footer from "components/Footer";
import { GermanMainLogo } from "assets";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user/userSlice";
import { userSelectors } from "../../store/user/selectors";


function AuthRootComponent() {
  const [username, setEmailLog] = useState("");
  const [password, setPasswordLog] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { authenticated, name, authorities } = useSelector(userSelectors);


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (location.pathname === "/login") {
      console.log("location.pathname =>", location.pathname);
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
        // Перенаправляем пользователя на другую страницу
        // authorities.some((authority) => authority.authority === "ROLE_ADMIN")
        //   ? navigate("/")
        //   : navigate("/user_login/user_account");
      } catch (error) {
        console.error("Error logging in:", error);
      }
    } else if (location.pathname === "/user_login/register") {
      console.log("location.pathname =>", location.pathname);
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
         // Получаем информацию о пользователе после успешной аутентификации
         const userInfoResponse = await instance.get("/auth/get_auth_info");
         // Сохраняем информацию о пользователе в Redux
         dispatch(userActions.setUserInfo(userInfoResponse.data));
        console.log("User logged in successfully:", response.data);
        // Перенаправляем пользователя на другую страницу
        // navigate("/user_login/user_account");
      } catch (error) {
        console.error("Error registering user:", error);
      }
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
            {location.pathname === "/login" ? (
              <LoginPage
                setEmailLog={setEmailLog}
                setPasswordLog={setPasswordLog}
              />
            ) : location.pathname === "/user_login/register" ? (
              <RegisterPage
                setEmailLog={setEmailLog}
                setPasswordLog={setPasswordLog}
              />
            ) : null}
          </Box>
        </Form>
      </Auth>
      <Footer />
    </>
  );
}

export default AuthRootComponent;
