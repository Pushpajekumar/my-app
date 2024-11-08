import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const CalorieInsight = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        isInsights
        label="Calries Details"
        handleBack={() => router.back()}
      />

      <View style={styles.analytics_container}>
        <View style={styles.text_container}>
          <Text style={styles.keep_going}>Keep Going</Text>
          <Text style={styles.heading}>You Have To Eat</Text>
          <Text style={styles.heading}>More Calries</Text>
        </View>
        <View style={styles.circle_container}>
          <Image
            source={require("@/assets/images/round-circle.png")}
            style={styles.circle}
          />
          <Image
            source={require("@/assets/images/primary-water.png")}
            style={styles.mini_image}
          />

          <Text style={styles.value}>1546</Text>
          <Text style={styles.unit}>Calories</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  analytics_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  text_container: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  keep_going: {
    fontSize: 15,
    color: Colors.light.mute,
    lineHeight: 18,
    fontWeight: "500",
  },

  heading: {
    fontSize: 24,
    lineHeight: 33,
    fontWeight: "700",
    letterSpacing: 0.2,
    color: Colors.light.text,
  },

  circle_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  circle: {
    width: 228,
    height: 228,
    position: "relative",
  },

  mini_image: {
    height: 28,
    width: 20,
    position: "absolute",
    top: "35%",
  },

  value: {
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: 0.2,
    fontWeight: "700",
    position: "absolute",
    color: Colors.light.text,
  },

  unit: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "500",
    position: "absolute",
    bottom: "35%",
    color: Colors.light.mute,
  },
});

export default CalorieInsight;
