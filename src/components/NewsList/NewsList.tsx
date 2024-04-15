import NewsCard from 'components/NewsCard';
import { v4 as uuidv4 } from "uuid"

import {
    MainLowerPartFlex,
    MainLowerPartItem,
  } from "./styles";


export interface NewsProps {
  title: string
  shortDescription: string
  imgUrl: string
  content: string  
}

export interface NewsListProps {
  newsList: NewsProps[];
}

const NewsList: React.FC<NewsListProps> = ({ newsList }) => {
  return (
    <MainLowerPartFlex>
      {newsList.map(news => (       
        <MainLowerPartItem key={uuidv4()}>
          <NewsCard news={news} />
        </MainLowerPartItem>
        
      ))}
    </MainLowerPartFlex>
  )
};

export default NewsList;
