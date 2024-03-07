import { Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import GlobalFonts from "./fonts/fonts"
import Layout from "components/Layout"
import FrontalPage from "pages/Frontal"

function App() {
  return (
    <div>
      <GlobalStyles />
      <GlobalFonts />      
      <Layout>
        <FrontalPage />
      </Layout>
      
    </div>
  )
}

export default App
