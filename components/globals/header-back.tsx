import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type HeaderBackProps = {
  label: string;
  showClearAll?: boolean;
  onClearAll?: () => void;
  handleBack: () => void;
};

const HeaderBack = ({ label, showClearAll, handleBack }: HeaderBackProps) => {
  return (
    <View style={styles.header_container}>
      <View style={styles.header_body}>
        <Pressable onPress={handleBack}>
          <AntDesign name="left" size={20} color={Colors.light.primary} />
        </Pressable>
        <Text style={styles.text_heading}>{label}</Text>
      </View>
      {showClearAll && <Text style={styles.text}>Clear All</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.light.background,
  },
  header_body: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_heading: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    marginLeft: 10,
  },
  text: {
    color: Colors.light.primary,
    fontWeight: "500",
    fontSize: 14,
  },
});

export default HeaderBack;
