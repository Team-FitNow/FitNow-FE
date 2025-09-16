import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      // 필요하면 추가
      background?: string;
      text?: string;
    };
  }
}
