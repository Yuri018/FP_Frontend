import { useState, useEffect, useRef, useLayoutEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import InfoList from "components/InfoList/InfoList"
import NewsList from "components/NewsList/NewsList"
import { instance } from "../../utils/axios"
import { MainLowerPartContainer, MainLowerPartFlex } from "./styles"

interface NewsProps {
  title: string
  shortDescription: string
  imgUrl: string
  content: string
  imgCopyright?: string
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

function MainLowerPart({city}: React.PropsWithChildren<{city: string}>) {
  const location = useLocation()
  const navigate = useNavigate()
  const [newsData, setNewsData] = useState<NewsProps[]>([])
  const [infoData, setInfoData] = useState<InfoProps[]>([])

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
        console.log("Received news data:", response.data)
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
        let endpoint = `/${city}`
        if (location.pathname === `/${city}/cafes-restaurants`) {
          endpoint = `/${city}/restaurants_info`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/children`) {
          endpoint = `/${city}/children_info`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/shops`) {
          endpoint = `/${city}/shops_info`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/doctors/physicians`) {
          endpoint = `/${city}/doctors_info/physician`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/doctors/stomatologists`) {
          endpoint = `/${city}/doctors_info/stomatologist`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/doctors/pediatrists`) {
          endpoint = `/${city}/doctors_info/pediatrist`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/doctors/orthopedists`) {
          endpoint = `/${{ city }}/doctors_info/orthopedist`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/doctors/cardiologists`) {
          endpoint = `/${city}/doctors_info/cardiologist`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/doctors/dermatologists`) {
          endpoint = `/${city}/doctors_info/dermatologist`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/services/legal_services`) {
          endpoint = `/${city}/legal_services_info`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/services/translators`) {
          endpoint = `/${city}/translators_info`
          console.log("Fetching data from endpoint:", endpoint)
        } else if (location.pathname === `/${city}/services/hair_beauty`) {
          endpoint = `/${city}/hair_beauty_info`
          console.log("Fetching data from endpoint:", endpoint)
        }
        const response = await instance.get<InfoProps[]>(endpoint)
        console.log("Received data:", response.data)
        setInfoData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
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
        {location.pathname === `/${city}/cafes-restaurants` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/restaurants_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/children` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/children_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/shops` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/shops_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/physicians` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/physician`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/stomatologists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/stomatologist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/pediatrists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/pediatrist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/orthopedists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/orthopedist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/cardiologists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/cardiologist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/doctors/dermatologists` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/doctors_info/dermatologist`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/services/legal_services` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/legal_services_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/services/translators` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/translators_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
        {location.pathname === `/${city}/services/hair_beauty` &&
          (infoData.length > 0 ? (
            <InfoList
              infoList={infoData}
              endpoint={`/${city}/hair_beauty_info`}
            />
          ) : (
            <div>Loading...</div>
          ))}
      </MainLowerPartFlex>
    </MainLowerPartContainer>
  )
}

export default MainLowerPart
