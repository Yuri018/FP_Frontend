import React, { useState } from 'react';
import InfoEditDialog from 'components/InfoCardEdit'; // Импортируем компонент InfoEditDialog
import { CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { MyButton, MyCardMedia, MyCard } from './styles';

interface Info {
  id: number;
  link: string
  title: string
  description: string
  address: string
  tel: string
  status: number;
}

interface InfoCardProps {
  info: Info;
}

const InfoCard: React.FC<InfoCardProps> = ({ info }: InfoCardProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

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
          <MyButton size="small" variant="contained" color="primary" onClick={handleEditDialogOpen}>
            Редактировать
          </MyButton>
        </CardActions>
      </MyCard>

      {/* Диалоговое окно редактирования */}
      <InfoEditDialog open={editDialogOpen} onClose={handleEditDialogClose} info={info} />
    </>
  )
};

export default InfoCard;
