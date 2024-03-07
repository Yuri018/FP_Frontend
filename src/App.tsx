import { Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import GlobalFonts from "./fonts/fonts"
import Layout from "components/Layout"
import FrontalPage from "pages/Frontal"
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
        {/* <FrontalPage /> */}
        {/* <Berlin /> */}
        {/* <Munich /> */}
        {/* <Rheinland /> */}
        {/* <Frankfurt /> */}
        <Hamburg />
      </Layout>
      
    </div>
  )
}

export default App
