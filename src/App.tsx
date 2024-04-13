import { Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout"
import FrontalPage from "pages/FrontalPage"
import Berlin from "pages/Berlin";
import Munich from "pages/Munich";
import Rheinland from "pages/Rheinland";
import Frankfurt from "pages/Frankfurt";
import Hamburg from "pages/Hamburg";
import AuthRootComponent from "components/auth/Auth";
import UserAccount from "components/updateUserSubscriptions";


function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<FrontalPage />} />
          <Route path="/berlin" element={<Berlin />} />
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
