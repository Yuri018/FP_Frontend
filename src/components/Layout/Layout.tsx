import Main from "components/Main";
import { LayoutWrapper, LayoutContainer } from "./styles"

import Header from 'components/Header';
import { Children } from "react";

function Layout() {
  return (
    <LayoutWrapper>
      <LayoutContainer>
        <Header  />
      </LayoutContainer>
      <Main/>
    </LayoutWrapper>
  )
}

export default Layout;
