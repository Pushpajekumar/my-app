import { Colors } from "@/constants/Colors";
import { getFontSize } from "@/utils/font";
import React, { ReactNode } from "react";
import {
  ViewStyle,
  TextStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface ButtonProps extends TouchableOpacityProps {
  title?: string; // Make title optional if you're using children
  backgroundColor?: string;
  color?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: ReactNode; // Allow custom children
}

const Button: React.FC<ButtonProps> = ({
  title,
  backgroundColor = Colors.light.primary,
  color = "black",
  style,
  textStyle,
  children,
  ...touchableProps // Spread remaining props to TouchableOpacity
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      activeOpacity={0.7}
      {...touchableProps} // Apply the extended TouchableOpacity props
    >
      {children ? (
        children
      ) : (
        <Text style={[styles.text, { color }, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: getFontSize(16),
    fontWeight: "bold",
  },
});

export default Button;
