import { LayoutWrapper, LayoutContainer } from "./styles";

import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      {children}      
    </LayoutWrapper>
  )
}

export default Layout;
