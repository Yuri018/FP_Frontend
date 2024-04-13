import { Button, Checkbox, TextField, Typography } from "@mui/material"
import { InsitingText } from "./styles"
import type { IPropsLogin } from "../types"
const label = { inputProps: { "aria-label": "Checkbox demo" } }

function SubscriptionsPage ({setEmailLog, setPasswordLog}: IPropsLogin) {
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
        Личный кабинет
      </Typography>
      <Typography
        variant="body1"
        padding={1}
        mb={2}
        fontFamily="Montserrat"
        fontWeight={400}
        textAlign="center"
      >
        Подпишитесь ра рассылку
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
        <InsitingText to="/">На главную</InsitingText>
    </>
  )
}

export default SubscriptionsPage
