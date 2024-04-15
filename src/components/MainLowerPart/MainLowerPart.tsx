import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewsList from "components/NewsList/NewsList";
// import NewsList from "components/NewsList/NewsList";
import { instance } from "../../utils/axios";
import {
  MainLowerPartContainer,
  MainLowerPartFlex,
} from "./styles";
import { title } from "process";

interface NewsProps {
  title: string
  shortDescription: string
  imgUrl: string
  content: string  
}

export interface NewsListProps {
  newsList: NewsProps[]
}

// function MainLowerPart() {
//   const [newsData, setNewsData] = useState<NewsProps[]>([])

//   useEffect(() => {
//     async function fetchNewsData() {
//       try {
//         const response = await instance.get<NewsProps[]>(
//           "/general_news/except/GENERAL_INFO",
//         )
//         setNewsData(response.data)
//       } catch (error) {
//         console.error("Error fetching news data:", error)
//       }
//     }
//     fetchNewsData()
//   }, [])

//   return (
//     <MainLowerPartContainer>
//       <MainLowerPartFlex>
//         {newsData.length > 0 ? (
//           <NewsList newsList={newsData} />
//         ) : (
//           <div>Loading...</div>
//         )}
//       </MainLowerPartFlex>
//     </MainLowerPartContainer>
//   )
// }

// export default MainLowerPart;

function MainLowerPart() {
  const [newsData, setNewsData] = useState<NewsProps[]>([])

  useEffect(() => {
    async function fetchNewsData() {
      try {
        let endpoint = "/general_news/except/GENERAL_INFO"
        if (location.pathname === "/") {
          endpoint = "/general_news/except/GENERAL_INFO"
        } else if (location.pathname === "/general-info") {
          endpoint = "/general_news/get_info_by/GENERAL_INFO"
        } else if (location.pathname === "/other_path3") {
          endpoint = "/other_endpoint3"
        }

        const response = await instance.get<NewsProps[]>(endpoint)
        setNewsData(response.data)
      } catch (error) {
        console.error("Error fetching news data:", error)
      }
    }
    fetchNewsData()
  }, [location.pathname])

  return (
    <MainLowerPartContainer>
      <MainLowerPartFlex>
        {newsData.length > 0 ? (
          <NewsList newsList={newsData} />
        ) : (
          <div>Loading...</div>
        )}
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart




// const newsData = [
//   { 
//     imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8239409/ratio_4_3/1685087592/800x600/", 
//     title: 'Mobilität und Verkehr in Berlin', 
//     content: 'Miteinander statt gegeneinander: In Berlin nehmen alle Verkehrsteilnehmende gleichberechtigt am Straßenverkehr teil.' 
//   },
//   { 
//     imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237399/ratio_4_3/1685010433/800x600/", 
//     title: 'Moderne Verwaltung in Berlin ', 
//     content: 'Berlin wird digitalisiert und modernisiert. Für eine Stadt, die auf allen Ebenen funktioniert.' 
//   },
//   {
//     imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237900/ratio_4_3/1685015621/800x600/", 
//     title: 'Bauen und Wohnen in Berlin', 
//     content: 'Der Senat setzt auf schnellen Neubau, bezahlbare Wohnungen und wirksamen Mieterschutz.' 
//   },
//   {

//     imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8239409/ratio_4_3/1685087592/800x600/", 
//     title: 'Mobilität und Verkehr in Berlin', 
//     content: 'Miteinander statt gegeneinander: In Berlin nehmen alle Verkehrsteilnehmende gleichberechtigt am Straßenverkehr teil.' 
//   },
//   { 
//     imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237399/ratio_4_3/1685010433/800x600/", 
//     title: 'Moderne Verwaltung in Berlin ', 
//     content: 'Berlin wird digitalisiert und modernisiert. Für eine Stadt, die auf allen Ebenen funktioniert.' 
//   },
//   {
//     imgUrl: "https://www.berlin.de/binaries/asset/image_assets/8237900/ratio_4_3/1685015621/800x600/", 
//     title: 'Bauen und Wohnen in Berlin', 
//     content: 'Der Senat setzt auf schnellen Neubau, bezahlbare Wohnungen und wirksamen Mieterschutz.' 
//   },

// ]