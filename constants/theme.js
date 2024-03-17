import { PixelRatio } from "react-native";
const fontScale = PixelRatio.getFontScale()

const SIZES = {
    small: 9 * fontScale,
    medium: 14 * fontScale,
    large: 20 * fontScale,
    xLarge: 30 * fontScale,
}

const COLORS = {
  
  spaceCadet: "#17274fff",
  tangBlue: "#2f5fc6ff",
  tropicalIndigo: "#7c7adbff",
  Black: "#111",
  
  
  gray: "#83829A",
  gray2: "#C1C0C8",
  
  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
const FONT = {
  Light: "Tajawal-Light",
  Regular: "Tajawal-Regular",
  Medium: "Tajawal-Medium",
  Bold: "Tajawal-Bold",
}

export { SIZES , COLORS  , SHADOWS , FONT};
