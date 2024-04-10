import React, { Key } from 'react';
import NewsCard from 'components/NewsCard';
import { v4 as uuidv4 } from "uuid"

import {
    MainLowerPartFlex,
    MainLowerPartItem,
  } from "./styles";


interface News {
    imgUrl: string;
    title: string;
    content: string;
}

interface NewsListProps {
  newsList: News[];
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
