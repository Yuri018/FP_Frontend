import { CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { MyButton, MyCardMedia, MyCard } from './styles';

interface Info {
  link: string
  title: string
  description: string
  address: string
  tel: string  
}

interface InfoCardProps {
  info: Info;
}

const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
  return (
    <>
      <MyCard>
        <CardActionArea>
          <CardContent>
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
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ padding: 2 }}>
          <MyButton size="small" variant="contained" color="primary">
            Редактировать
          </MyButton>
        </CardActions>
      </MyCard>
    </>
  )
};

export default InfoCard;
