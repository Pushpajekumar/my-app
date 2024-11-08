import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type HeaderBackProps = {
  label: string;
  showClearAll?: boolean;
  onClearAll?: () => void;
  handleBack: () => void;
  isProfile?: boolean;
  isInsights?: boolean;
};

const HeaderBack = ({
  label,
  showClearAll,
  handleBack,
  isProfile,
  isInsights,
}: HeaderBackProps) => {
  return (
    <>
      {isProfile ? (
        <View style={styles.header_container}>
          <Pressable onPress={handleBack}>
            <AntDesign name="left" size={20} color={Colors.light.primary} />
          </Pressable>
          <Text style={styles.account}>Account</Text>
          <Image
            source={require("@/assets/images/qr_scan.png")}
            style={styles.qr}
          />
        </View>
      ) : isInsights ? (
        <View style={styles.header_container}>
          <Pressable onPress={handleBack}>
            <AntDesign name="left" size={20} color={Colors.light.primary} />
          </Pressable>
          <Text style={styles.text_heading}>{label}</Text>
          <Image
            source={require("@/assets/images/edit-pen.png")}
            style={styles.edit_pen}
          />
        </View>
      ) : (
        <View style={styles.header_container}>
          <View style={styles.header_body}>
            <Pressable onPress={handleBack}>
              <AntDesign name="left" size={20} color={Colors.light.primary} />
            </Pressable>
            <Text style={styles.text_heading}>{label}</Text>
          </View>
          {showClearAll && <Text style={styles.text}>Clear All</Text>}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  account: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "800",
    color: Colors.light.primary,
  },

  qr: {
    width: 24,
    height: 24,
  },
  edit_pen: {
    width: 16,
    height: 16,
  },
});

export default HeaderBack;
