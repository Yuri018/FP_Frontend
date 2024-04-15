import { CardActionArea, CardContent, Typography, CardActions } from '@mui/material';
import { MyButton, MyCardMedia, MyCard } from './styles';

interface News {
  imgUrl: string
  title: string
  shortDescription: string
  content: string  
}

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <>
    <MyCard>
      <CardActionArea>
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
      <CardActions sx={{padding: 2}}>
        <MyButton size="small" variant="contained" color="primary" >
          Читать подробнее
        </MyButton>
      </CardActions>
  </MyCard>
    </>
  );
};

export default NewsCard;
