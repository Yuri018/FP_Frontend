export interface IPropsLogin {
    setEmailLog: (value: string) => void
    setPasswordLog: (value: string) => void
    
}
export interface IPropsRegistr {
    setEmailLog: (value: string) => void
    setPasswordLog: (value: string) => void

}

export interface UserDataProps {
    id: number | null;
    firstname: string;
    lastname: string;
    children_info: boolean;
    doctors_info: boolean;
    hair_beauty_info: boolean;
    legal_services_info: boolean;
    restaurants_info: boolean;
    shops_info: boolean;
    translators_info: boolean;
    news_info: boolean;
    berlin: boolean;
    muenchen: boolean;
    dusseldorf: boolean;
    hamburg: boolean;
    frankfurt: boolean;
  }