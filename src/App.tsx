import { Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout"
import FrontalPage from "pages/FrontalPage"
import Munich from "pages/Munich";
import Rheinland from "pages/Rheinland";
import Frankfurt from "pages/Frankfurt";
import Hamburg from "pages/Hamburg";
import AuthRootComponent from "components/auth/Auth";
import UserAccount from "components/updateUserSubscriptions";
import FrontalPage_GenInfo from "pages/FrontalPage_GenInfo";
import Berlin_Restaurants from "pages/Berlin/Berlin_Restaurants";
import Berlin_Main from "pages/Berlin";
import Berlin_Children from "pages/Berlin/Berlin_Children";
import Berlin_Shops from "pages/Berlin/Berlin_Shops";
import Berlin_LegalServices from "pages/Berlin/Berlin_LegalServices";
import Berlin_Doctors from "pages/Berlin/Berlin_Doctors";


function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<FrontalPage />} />
          <Route path="/general-info" element={<FrontalPage_GenInfo />} />
          <Route path="/berlin" element={<Berlin_Main />} />
          <Route
            path="/berlin/cafes-restaurants"
            element={<Berlin_Restaurants />}
          />
          <Route path="/berlin/children" element={<Berlin_Children />} />
          <Route path="/berlin/shops" element={<Berlin_Shops />} />
          <Route path="/berlin/services" element={<Berlin_LegalServices />} />
          <Route
            path="/berlin/doctors/physicians"
            element={<Berlin_Doctors />}
          />
          <Route
            path="berlin/doctors/stomatologists"
            element={<Berlin_Doctors />}
          />
          <Route
            path="/berlin/doctors/pediatrists"
            element={<Berlin_Doctors />}
          />
          <Route
            path="/berlin/doctors/orthopedists"
            element={<Berlin_Doctors />}
          />
          <Route
            path="/berlin/doctors/cardiologists"
            element={<Berlin_Doctors />}
          />
          <Route
            path="/berlin/doctors/dermatologists"
            element={<Berlin_Doctors />}
          />
          <Route path="/munich" element={<Munich />} />
          <Route path="/frankfurt" element={<Frankfurt />} />
          <Route path="/dusseldorf" element={<Rheinland />} />
          <Route path="/hamburg" element={<Hamburg />} />
          <Route path="/login" element={<AuthRootComponent />} />
          <Route path="/user_login/register" element={<AuthRootComponent />} />
          <Route path="/user_login/user_account" element={<UserAccount />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout>
    </>
  )
}

export default App
