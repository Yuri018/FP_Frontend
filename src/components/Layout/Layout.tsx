import MainUpperPart from "components/MainUpperPart";
import MainLowerPart from "components/MainLowerPart";
import { LayoutWrapper, LayoutContainer } from "./styles";

import Header from 'components/Header';
import { Children } from "react";

function Layout() {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Header />
        <MainUpperPart imageurl={""} />
        <MainLowerPart />
      </LayoutContainer>
    </LayoutWrapper>
  )
}

export default Layout;
