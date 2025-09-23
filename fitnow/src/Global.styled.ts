import "styled-components";
import { Theme } from "./theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calisto MT';
    src: url('/fonts/CalistoMT-Regular.woff2') format('woff2'),
         url('/fonts/CalistoMT-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
