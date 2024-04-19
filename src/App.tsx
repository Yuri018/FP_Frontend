import { Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout"
import FrontalPage from "pages/FrontalPage"
import Munich from "pages/Munich";
import Rheinland from "pages/Rheinland";
import Frankfurt from "pages/Frankfurt";
import Hamburg from "pages/Hamburg";
import UserAccount from "components/updateUserSubscriptions";
import Berlin from "pages/Berlin";
import InfoSearchPage from "pages/InfoSearchPage";
import RegisterPage from "components/auth/register";
import LoginPage from "components/auth/login";


function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<FrontalPage />} />
          <Route path="/search" element={<InfoSearchPage />} />
          <Route path="/general-info" element={<FrontalPage />} />
          <Route path="/berlin" element={<Berlin />} />
          <Route path="/berlin/cafes-restaurants" element={<Berlin />} />
          <Route path="/berlin/children" element={<Berlin />} />
          <Route path="/berlin/shops" element={<Berlin />} />
          <Route path="/berlin/services/legal_services" element={<Berlin />} />
          <Route path="/berlin/services/translators" element={<Berlin />} />
          <Route path="/berlin/services/hair_beauty" element={<Berlin />} />
          <Route path="/berlin/doctors/physicians" element={<Berlin />} />
          <Route path="berlin/doctors/stomatologists" element={<Berlin />} />
          <Route path="/berlin/doctors/pediatrists" element={<Berlin />} />
          <Route path="/berlin/doctors/orthopedists" element={<Berlin />} />
          <Route path="/berlin/doctors/cardiologists" element={<Berlin />} />
          <Route path="/berlin/doctors/dermatologists" element={<Berlin />} />
          <Route path="/muenchen" element={<Munich />} />
          <Route path="/muenchen/cafes-restaurants" element={<Munich />} />
          <Route path="/muenchen/children" element={<Munich />} />
          <Route path="/muenchen/shops" element={<Munich />} />
          <Route path="/muenchen/services/legal_services" element={<Munich />} />
          <Route path="/muenchen/services/translators" element={<Munich />} />
          <Route path="/muenchen/services/hair_beauty" element={<Munich />} />
          <Route path="/muenchen/doctors/physicians" element={<Munich />} />
          <Route path="/muenchen/doctors/stomatologists" element={<Munich />} />
          <Route path="/muenchen/doctors/pediatrists" element={<Munich />} />
          <Route path="/muenchen/doctors/orthopedists" element={<Munich />} />
          <Route path="/muenchen/doctors/cardiologists" element={<Munich />} />
          <Route path="/muenchen/doctors/dermatologists" element={<Munich />} />
          <Route path="/frankfurt" element={<Frankfurt />} />
          <Route path="/frankfurt/cafes-restaurants" element={<Frankfurt />} />
          <Route path="/frankfurt/children" element={<Frankfurt />} />
          <Route path="/frankfurt/shops" element={<Frankfurt />} />
          <Route
            path="/frankfurt/services/legal_services"
            element={<Frankfurt />}
          />
          <Route
            path="/frankfurt/services/translators"
            element={<Frankfurt />}
          />
          <Route
            path="/frankfurt/services/hair_beauty"
            element={<Frankfurt />}
          />
          <Route path="/frankfurt/doctors/physicians" element={<Frankfurt />} />
          <Route
            path="/frankfurt/doctors/stomatologists"
            element={<Frankfurt />}
          />
          <Route
            path="/frankfurt/doctors/pediatrists"
            element={<Frankfurt />}
          />
          <Route
            path="/frankfurt/doctors/orthopedists"
            element={<Frankfurt />}
          />
          <Route
            path="/frankfurt/doctors/cardiologists"
            element={<Frankfurt />}
          />
          <Route
            path="/frankfurt/doctors/dermatologists"
            element={<Frankfurt />}
          />
          <Route path="/dusseldorf" element={<Rheinland />} />
          <Route path="/dusseldorf/cafes-restaurants" element={<Rheinland />} />
          <Route path="/dusseldorf/children" element={<Rheinland />} />
          <Route path="/dusseldorf/shops" element={<Rheinland />} />
          <Route
            path="/dusseldorf/services/legal_services"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/services/translators"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/services/hair_beauty"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/doctors/physicians"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/doctors/stomatologists"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/doctors/pediatrists"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/doctors/orthopedists"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/doctors/cardiologists"
            element={<Rheinland />}
          />
          <Route
            path="/dusseldorf/doctors/dermatologists"
            element={<Rheinland />}
          />
          <Route path="/hamburg" element={<Hamburg />} />
          <Route path="/hamburg/cafes-restaurants" element={<Hamburg />} />
          <Route path="/hamburg/children" element={<Hamburg />} />
          <Route path="/hamburg/shops" element={<Hamburg />} />
          <Route
            path="/hamburg/services/legal_services"
            element={<Hamburg />}
          />
          <Route path="/hamburg/services/translators" element={<Hamburg />} />
          <Route path="/hamburg/services/hair_beauty" element={<Hamburg />} />
          <Route path="/hamburg/doctors/physicians" element={<Hamburg />} />
          <Route path="/hamburg/doctors/stomatologists" element={<Hamburg />} />
          <Route path="/hamburg/doctors/pediatrists" element={<Hamburg />} />
          <Route path="/hamburg/doctors/orthopedists" element={<Hamburg />} />
          <Route path="/hamburg/doctors/cardiologists" element={<Hamburg />} />
          <Route path="/hamburg/doctors/dermatologists" element={<Hamburg />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user_login/register" element={<RegisterPage />} />
          <Route path="/user_login/user_account" element={<UserAccount />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout>
    </>
  )
}

export default App
