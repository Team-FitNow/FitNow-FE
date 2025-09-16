import "styled-components";

// declare module "styled-components" {
//   export interface DefaultTheme {
//     colors: {
//       primary: string;
//       secondary: string;
//       // 필요하면 추가
//       background?: string;
//       text?: string;
//     };
//   }
import { Theme } from "./theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
