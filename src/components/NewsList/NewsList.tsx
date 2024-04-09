import React, { Key } from 'react';
import NewsCard from 'components/NewsCard';
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
        {newsList.map((news) => (
            <MainLowerPartItem>
                <NewsCard news={news} />
            </MainLowerPartItem>
        ))}
    </MainLowerPartFlex>


  );
};

export default NewsList;
