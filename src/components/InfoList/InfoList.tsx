import InfoCard from 'components/InfoCard/InfoCard';
import { v4 as uuidv4 } from "uuid"

import {
    MainLowerPartFlex,
    MainLowerPartItem,
  } from "./styles";


export interface InfoProps {
  link: string
  title: string
  description: string
  address: string
  tel: string  
}

export interface InfoListProps {
  infoList: InfoProps[];
}

const InfoList: React.FC<InfoListProps> = ({ infoList }) => {
  return (
    <MainLowerPartFlex>
      {infoList.map(info => (       
        <MainLowerPartItem key={uuidv4()}>
          <InfoCard info={info} />
        </MainLowerPartItem>
        
      ))}
    </MainLowerPartFlex>
  )
};

export default InfoList;
