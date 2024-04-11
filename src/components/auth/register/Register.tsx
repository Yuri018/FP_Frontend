import { Button, TextField, Typography } from "@mui/material"
import type { IPropsRegistr } from "../types"
import { IncitingText } from "./styles"

const RegisterPage: React.FC<IPropsRegistr> = (
  props: IPropsRegistr,
): JSX.Element => {
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
        Регистрация
      </Typography>
      <Typography
        variant="body2"
        padding={1}
        mb={0}
        fontFamily="Montserrat"
        fontWeight={400}
        textAlign="center"
      >
        Введите данные для Регистрации
      </Typography>
      <TextField
        fullWidth={true}
        margin="dense"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш Email"
        size="small"
        onChange={e => setEmailLog(e.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="dense"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш password"
        size="small"
        onChange={e => setPasswordLog(e.target.value)}
      />
      <Button
        type="submit"
        size="small"
        variant="contained"
        sx={{
          fontFamily: "Montserrat",
          marginTop: 2,
          marginBottom: 2,
          width: "80%",
          padding: 2,
        }}
      >
        Регистрация
      </Button>
      <Typography
        variant="body2"
        sx={{ fontFamily: "Montserrat" }}
        fontWeight={400}
      >
        У вас есть аккаунта?
        <IncitingText to="/login">Авторизация</IncitingText>
      </Typography>

      {/* <Checkbox {...label} defaultChecked /> */}
    </>
  )
}

export default RegisterPage
