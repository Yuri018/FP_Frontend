import { Button, Checkbox, TextField, Typography } from "@mui/material"
import { InsitingText } from "./styles"
import type { IPropsLogin } from "../types"
const label = { inputProps: { "aria-label": "Checkbox demo" } }

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setEmailLog, setPasswordLog } = props
  return (
    <>
      <Typography
        variant="h4"
        padding={1}
        mb={0}
        fontFamily="Montserrat"
        fontWeight={500}
        textAlign="center"
      >
        Авторизация
      </Typography>
      <Typography
        variant="body1"
        padding={1}
        mb={2}
        fontFamily="Montserrat"
        fontWeight={400}
        textAlign="center"
      >
        Введите ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш Email"
        onChange={e => setEmailLog(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш password"
        onChange={e => setPasswordLog(e.target.value)}
      />
      <Button
        type="submit"
        size="large"
        variant="contained"
        sx={{
          fontFamily: "Montserrat",
          marginTop: 2,
          marginBottom: 2,
          width: "80%",
          padding: 2,
        }}
      >
        Войти
      </Button>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Montserrat" }}
        fontWeight={400}
      >
        У вас нет аккаунта?{" "}
        <InsitingText to="/user_login/register">Регистрация</InsitingText>
      </Typography>

      {/* <Checkbox {...label} defaultChecked /> */}
    </>
  )
}

export default LoginPage
