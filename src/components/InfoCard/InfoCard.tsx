import React, { useState } from 'react';
import InfoCardEdit from 'components/InfoCardEdit';
import { CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { MyButton, MyCardMedia, MyCard } from './styles';
import { useSelector } from "react-redux"
import { userSelectors } from "../../store/user/selectors";



interface Info {
  id: number;
  title: string;
  description: string;
  address: string;
  tel: string;
  link: string;
  status: number;
  city: {
    id: number;
    name: string;
  };
}

interface InfoCardProps {
  info: Info;
  endpoint: string;
}



const InfoCard: React.FC<InfoCardProps> = ({ info, endpoint }: InfoCardProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const { authorities } = useSelector(userSelectors)


  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

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

          {authorities.some(
            authority => authority.authority === "ROLE_ADMIN",
          ) && (
              <MyButton size="small" variant="contained" color="primary" onClick={handleEditDialogOpen}>
                Редактировать
              </MyButton>
            )}

        </CardActions>
      </MyCard>

      {/* Диалоговое окно редактирования */}
      <InfoCardEdit open={editDialogOpen} onClose={handleEditDialogClose} info={info} endpoint={endpoint} />
    </>
  )
};

export default InfoCard;
