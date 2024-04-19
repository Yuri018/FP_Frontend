import { CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { MyButton, MyCardMedia, MyCard, MyCardActions } from './styles';
import { useState } from 'react';
import FullNewsCard from 'components/NewsCardFull';

interface News {
  imgUrl: string
  title: string
  shortDescription: string
  content: string
  imgCopyright?: string
}

interface NewsCardProps {
  news: News;
}

function NewsCard ({ news } : NewsCardProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MyCard>
        <CardActionArea onClick={handleOpen}>
          <MyCardMedia
            image={news.imgUrl}
            title="test"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {news.title} 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {news.shortDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <MyCardActions sx={{padding: 2}}>
          <MyButton size="large" variant="contained" color="primary" onClick={handleOpen}>
            Читать подробнее
          </MyButton>
        </MyCardActions>
      </MyCard>
      <FullNewsCard open={open} onClose={handleClose} news={news} />
    </>
  );
};

export default NewsCard;