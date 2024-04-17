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
import Berlin from "pages/Berlin";


function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<FrontalPage />} />
          <Route path="/general-info" element={<FrontalPage_GenInfo />} />
          <Route path="/berlin" element={<Berlin />} />
          <Route
            path="/berlin/cafes-restaurants"
            element={<Berlin />}
          />
          <Route path="/berlin/children" element={<Berlin />} />
          <Route path="/berlin/shops" element={<Berlin />} />
          <Route path="/berlin/services" element={<Berlin />} />
          <Route
            path="/berlin/doctors/physicians"
            element={<Berlin />}
          />
          <Route
            path="berlin/doctors/stomatologists"
            element={<Berlin />}
          />
          <Route
            path="/berlin/doctors/pediatrists"
            element={<Berlin />}
          />
          <Route
            path="/berlin/doctors/orthopedists"
            element={<Berlin />}
          />
          <Route
            path="/berlin/doctors/cardiologists"
            element={<Berlin />}
          />
          <Route
            path="/berlin/doctors/dermatologists"
            element={<Berlin />}
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
