import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import InfoList from "components/InfoList/InfoList"
import NewsList from "components/NewsList/NewsList"
import { instance } from "../../utils/axios"
import { MainLowerPartContainer, MainLowerPartFlex } from "./styles"
import { title } from "process"

interface NewsProps {
  title: string
  shortDescription: string
  imgUrl: string
  content: string
}
interface InfoProps {
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

export interface NewsListProps {
  newsList: NewsProps[]
}
export interface InfoListProps {
  infoList: InfoProps[]
}

function MainLowerPart() {
  const location = useLocation()
  const [newsData, setNewsData] = useState<NewsProps[]>([])
  const [infoData, setinfoData] = useState<InfoProps[]>([])

  useEffect(() => {
    async function fetchNewsData() {
      try {
        let endpoint = "/general_news/except/GENERAL_INFO"
        if (location.pathname === "/") {
          endpoint = "/general_news/except/GENERAL_INFO"
        } else if (location.pathname === "/general-info") {
          endpoint = "/general_news/get_info_by/GENERAL_INFO"
        } else if (location.pathname === "/berlin") {
          endpoint = "/berlin_news"
        }

        const response = await instance.get<NewsProps[]>(endpoint)
        setNewsData(response.data)
      } catch (error) {
        console.error("Error fetching news data:", error)
      }
    }
    fetchNewsData()
  }, [location.pathname])

  useEffect(() => {
    async function fetchInfoData() {
      try {

        let endpoint = "/berlin/restaurants_info"
        if (location.pathname === "/berlin/cafes-restaurants") {
          endpoint = "/berlin/restaurants_info"
        } else if (location.pathname === "/berlin/children") {
          endpoint = "/berlin/children_info"
        } else if (location.pathname === "/berlin/shops") {
          endpoint = "/berlin/shops_info"
        } else if (location.pathname === "/berlin/services") {
          endpoint = "/berlin/legal_services_info"
        } else if (location.pathname === "/berlin/doctors/physicians") {
          endpoint = "/berlin/doctors_info/physician"
        } else if (location.pathname === "/berlin/doctors/stomatologists") {
          endpoint = "/berlin/doctors_info/stomatologist"
        } else if (location.pathname === "/berlin/doctors/pediatrists") {
          endpoint = "/berlin/doctors_info/pediatrist"
        } else if (location.pathname === "/berlin/doctors/orthopedists") {
          endpoint = "/berlin/doctors_info/orthopedist"
        } else if (location.pathname === "/berlin/doctors/cardiologists") {
          endpoint = "/berlin/doctors_info/cardiologist"
        } else if (location.pathname === "/berlin/doctors/dermatologists") {
          endpoint = "/berlin/doctors_info/dermatologist"
        } else if (location.pathname === "/berlin/services/legal_services") {
          endpoint = "/berlin/legal_services_info"
        } else if (location.pathname === "/berlin/services/translators") {
          endpoint = "/berlin/translators_info"
        } else if (location.pathname === "/berlin/services/hair_beauty") {
          endpoint = "/berlin/hair_beauty_info"
        }        
        const response = await instance.get<InfoProps[]>(endpoint)
        setinfoData(response.data)
      } catch (error) {
        console.error("Error fetching news data:", error)
      }
    }
    fetchInfoData()
  }, [location.pathname])

  return (
    <MainLowerPartContainer>
      <MainLowerPartFlex>
        {location.pathname === "/" &&
          (newsData.length > 0 ? (
            <NewsList newsList={newsData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/general-info" &&
          (newsData.length > 0 ? (
            <NewsList newsList={newsData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin" &&
          (newsData.length > 0 ? (
            <NewsList newsList={newsData} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/cafes-restaurants" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/restaurants_info"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/children" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} endpoint={"/berlin/children_info"} />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/shops" &&
          (infoData.length > 0 ? (
            <InfoList infoList={infoData} endpoint={"/berlin/shops_info"} />
          ) : (
            <div>Loading...</div>
          ))}        
        {location.pathname === "/berlin/doctors/physicians" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/doctors_info/physician"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/doctors/stomatologists" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/doctors_info/stomatologist"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/doctors/pediatrists" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/doctors_info/pediatrist"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/doctors/orthopedists" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/doctors_info/orthopedist"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/doctors/cardiologists" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/doctors_info/cardiologist"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/doctors/dermatologists" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/doctors_info/dermatologist"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/services/legal_services" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/legal_services_info"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/services/translators" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/translators_info"}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === "/berlin/services/hair_beauty" &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={"/berlin/hair_beauty_info"}
            />
          ) : (
            <div>Loading...</div>
          ))}
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart
