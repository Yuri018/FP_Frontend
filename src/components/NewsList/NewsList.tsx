import { v4 as uuidv4 } from "uuid"
import NewsCard from "components/NewsCard"

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

function NewsList({ newsList }: NewsListProps) {

  return (
    <MainLowerPartFlex >
      {newsList.map((news: NewsProps) => (
        <MainLowerPartItem key={uuidv4()}>
          <NewsCard news={news} />
        </MainLowerPartItem>
      ))}
    </MainLowerPartFlex>
  )
};

export default NewsList;
