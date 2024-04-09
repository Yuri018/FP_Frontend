import NewsList from "components/NewsList/NewsList";
import {
  MainLowerPartContainer,
  MainLowerPartFlex,
} from "./styles";

const newsData = [
  { 
    imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8239409/ratio_4_3/1685087592/800x600/", 
    title: 'Mobilität und Verkehr in Berlin', 
    content: 'Miteinander statt gegeneinander: In Berlin nehmen alle Verkehrsteilnehmende gleichberechtigt am Straßenverkehr teil.' 
  },
  { 
    imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237399/ratio_4_3/1685010433/800x600/", 
    title: 'Moderne Verwaltung in Berlin ', 
    content: 'Berlin wird digitalisiert und modernisiert. Für eine Stadt, die auf allen Ebenen funktioniert.' 
  },
  {
    imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237900/ratio_4_3/1685015621/800x600/", 
    title: 'Bauen und Wohnen in Berlin', 
    content: 'Der Senat setzt auf schnellen Neubau, bezahlbare Wohnungen und wirksamen Mieterschutz.' 
  },
  {

    imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8239409/ratio_4_3/1685087592/800x600/", 
    title: 'Mobilität und Verkehr in Berlin', 
    content: 'Miteinander statt gegeneinander: In Berlin nehmen alle Verkehrsteilnehmende gleichberechtigt am Straßenverkehr teil.' 
  },
  { 
    imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237399/ratio_4_3/1685010433/800x600/", 
    title: 'Moderne Verwaltung in Berlin ', 
    content: 'Berlin wird digitalisiert und modernisiert. Für eine Stadt, die auf allen Ebenen funktioniert.' 
  },
  {
    imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237900/ratio_4_3/1685015621/800x600/", 
    title: 'Bauen und Wohnen in Berlin', 
    content: 'Der Senat setzt auf schnellen Neubau, bezahlbare Wohnungen und wirksamen Mieterschutz.' 
  },

];

function MainLowerPart() {
  return (
    <MainLowerPartContainer>
      <MainLowerPartFlex>
          <NewsList newsList={newsData} />
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart;