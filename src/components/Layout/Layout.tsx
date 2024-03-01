import Main from "components/Main";
import { LayoutWrapper, LayoutContainer } from "./styles"

import Header from 'components/Header';
import { Children } from "react";

function Layout() {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Header />
        <Main imageUrl={""} />
      </LayoutContainer>
    </LayoutWrapper>
  )
}

export default Layout;
