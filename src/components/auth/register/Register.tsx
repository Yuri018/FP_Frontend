import { Button, TextField, Typography } from "@mui/material";
import type { IPropsRegistr } from "../types";
import { IncitingText } from "./styles";

const RegisterPage: React.FC<IPropsRegistr> = (
  props: IPropsRegistr
): JSX.Element => {
  const { setEmailLog, setPasswordLog } = props;
  return (
    <>
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
    </>
  );
};

export default RegisterPage;
