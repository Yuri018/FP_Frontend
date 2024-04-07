import { Button, TextField, Typography } from "@mui/material";
import { IncitingText } from "./styles";

const RegisterPage = () => {
    return (
        <>
            <Typography variant="h4" padding={1} mb={0} fontFamily='Montserrat' fontWeight={500} textAlign='center'>Регистрация</Typography>
            <Typography variant="body2" padding={1} mb={0} fontFamily='Montserrat' fontWeight={400} textAlign='center'>Введите данные для Регистрации</Typography>
            <TextField fullWidth={true}  margin="dense" label="Имя" variant="outlined" placeholder="Введите ваш Имя"  size="small"/>
            <TextField fullWidth={true}  margin="dense" label="Username" variant="outlined" placeholder="Введите ваш username"  size="small" />
            <TextField fullWidth={true}  margin="dense" label="Email" variant="outlined" placeholder="Введите ваш Email"  size="small" />
            <TextField type="password" fullWidth={true} margin="dense" label="Password" variant="outlined" placeholder="Введите ваш password"  size="small"/>
            <TextField type="password" fullWidth={true} margin="dense" label="Password" variant="outlined" placeholder="Повторите ваш password"  size="small"/>
            <Button 
                size="small" 
                variant="contained"
                sx={{fontFamily:'Montserrat', marginTop: 2, marginBottom: 2, width:'80%', padding: 2}}
                onClick={() => {
                    alert('submit');
                  }}
            >
                Регистрация
            </Button>
            <Typography variant="body2" sx={{fontFamily:'Montserrat'}} fontWeight={400}>
                  У вас есть аккаунта? 
                  <IncitingText href="/login">Авторизация</IncitingText>
            </Typography>

            {/* <Checkbox {...label} defaultChecked /> */}
        </>
    )
}

export default RegisterPage;