import "styled-components";

import themes from "../styles/themes";

type Theme = typeof themes.dark;

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme { }
}