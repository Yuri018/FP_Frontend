import { Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import GlobalFonts from "./fonts/fonts"
import Layout from "components/Layout"
import FrontalPage from "pages/FrontalPage"
import Berlin from "pages/Berlin";
import Munich from "pages/Munich";
import Rheinland from "pages/Rheinland";
import Frankfurt from "pages/Frankfurt";
import Hamburg from "pages/Hamburg";

function App() {
  return (
    <div>
      <GlobalStyles />
      <GlobalFonts />
      <Layout>
        <Routes>
          <Route path="/" element={<FrontalPage />} />
          <Route path="/berlin" element={<Berlin />} />
          <Route path="/munich" element={<Munich />} />
          <Route path="/frankfurt" element={<Frankfurt />} />
          <Route path="/duesseldorf" element={<Rheinland />} />
          <Route path="/hamburg" element={<Hamburg />} />
          <Route path="*" element="Page is not found" />          
        </Routes>
      </Layout>
    </div>
  )
}

export default App
