import { Dimensions, Platform } from "react-native";

//current OS
export const onIOS = Platform.OS === "ios";
export const onAndroid = Platform.OS === "android";

//Screen Dimensions
export const screenHeight = Dimensions.get("screen").height;
export const screenWidth = Dimensions.get("screen").width;
