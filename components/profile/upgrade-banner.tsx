import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const UpgradeBanner = () => {
  return (
    <View style={styles.rectangleView}>
      <View>
        <View style={styles.topContainer}>
          <View style={styles.pro_container}>
            <Text style={styles.pro_text}>PRO</Text>
          </View>
          <Text style={styles.upgradeToPremium}>Upgrade to Premium</Text>
        </View>
        <Text style={styles.enjoyWorkoutAccess}>
          Enjoy workout access without any restrictions
        </Text>
      </View>
      <View style={styles.icon_container}>
        <AntDesign name="right" size={20} color={"#000"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: Colors.light.primary,
    width: "100%",
    height: 79,
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
  },

  pro_container: {
    borderRadius: 16,
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  pro_text: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.light.text,
  },

  upgradeToPremium: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
  },
  enjoyWorkoutAccess: {
    marginTop: 5,
    fontSize: 11,
    color: "#000",
  },
  icon_container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UpgradeBanner;
