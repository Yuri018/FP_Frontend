import { createGlobalStyle } from 'styled-components';
import LatoRegular from './Lato-Regular.woff2';
import LatoRegularTtf from './Lato-Regular.ttf';
import LatoRegularWoff from './Lato-Regular.woff';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'FontName';
    src: local('Font-Name'), local('FontName'),
    url(${LatoRegularTtf}) format('truetype'), 
    url(${LatoRegularWoff}) format('woff'),
    url(${LatoRegular}) format('woff2');
    font-weight: 300;
    font-size: normal;
  }
`;

export default GlobalFonts;

