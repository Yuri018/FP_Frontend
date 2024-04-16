import InfoCard from 'components/InfoCard/InfoCard';
import { v4 as uuidv4 } from "uuid"

import {
    MainLowerPartFlex,
    MainLowerPartItem,
  } from "./styles";


export interface InfoProps {
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
  };}

export interface InfoListProps {
  infoList: InfoProps[];
  category: string
}

const InfoList: React.FC<InfoListProps> = ({ infoList, category }) => {
  return (
    <MainLowerPartFlex>
      {infoList.map(info => (       
        <MainLowerPartItem key={uuidv4()}>
          <InfoCard info={info} category={category}/>
        </MainLowerPartItem>
        
      ))}
    </MainLowerPartFlex>
  )
};

export default InfoList;
