import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      highlightColor: string;
      greyTextColor: string;
      h3titleColor: string;
      primaryIconColor: string;
      greyBackgroundColor: string;
      colourLink:{
        normal:string;
        hoverColor: string;
        secondaryHover: string;
        primaryHover: string;
      }
    };
    fontSizes: {
      small11px: string;
      normal12px: string;
      large16px: string;
      xlarge18px: string;
      xxlarge24px: string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors:{
    highlightColor: "#FFB500",
    greyTextColor: "#58595B",
    h3titleColor: "#002F5F",
    primaryIconColor: "#002F5F",
    greyBackgroundColor: "#F8F8F8",
    colourLink:{
      normal:"#002F5F",
      hoverColor: "#264D76",
      secondaryHover: "#EEE",
      primaryHover: "#ffbc3d",
    }
  },
  fontSizes: {
    small11px: "0.65rem",
    normal12px: "0.75rem",
    large16px: "1rem",
    xlarge18px: "1.125rem",
    xxlarge24px: "1.5rem",
  },
};
