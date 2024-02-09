import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ModeT;
    colors: ColorsT;
    breakpoints: BreakPointsT;
    fontSize: FontSizeT;
    boxShadow: BoxShadow;
  }

  export type ModeT = "dark" | "light";

  interface ColorsT {
    bg: "#F2F2F2" | "#070A0D";
    text: "#F2F2F2" | "#070A0D";
    black: "#070A0D";
    white: "#F2F2F2";
    soft_black: "#24272C";
    gray: "#D9D9D9";
    gray_shade: "#8C8C8C";
    gray_dark: "#404040";
    green: "#2B8C44";
    green_shade: "#1F7334";
    green_tint: "#658C6F";
    red: "#D90D1E";
    red_shade: "#BF0426";
    blue: "#1E6FD9";
    blue_shade: "#0D65D9";
    blue_tint: "#5C9DF2";
  }

  interface FontSizeT {
    xs: "1.2rem";
    sm: "1.4rem";
    base: "1.6rem";
    md: "1.8rem";
    lg: "2rem";
    xl: "2.4rem";
    xxl: "2.8rem";
    h3: "3.8rem";
    h2: "4.8rem";
    h1: "6.8rem";
  }

  interface BoxShadow {
    radial_sm: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    radial_md: "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    radial_lg: "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    bottom_right_sm: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
    bottom_right_lg: "rgb(38, 57, 77) 10px 20px 30px -10px";
    space_sm: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px";
  }

  interface BreakPointsT {
    desktop: "max-width:96em"; // 1536px
    desktop_sm: "max-width:80em"; // 1280px
    tablet: "max-width:64em"; // 1024px
    tablet_sm: "max-width:53.75em"; // 860px
    mobile_lg: "max-width:40em"; // 640px
    mobile: "max-width:30em"; // 480px
  }
}
