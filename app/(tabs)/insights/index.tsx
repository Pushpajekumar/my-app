import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import ListCard from "@/components/insights/workout-pogress-card";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        label="Insights"
        handleBack={() => router.navigate("/(tabs)")}
      />
      <ScrollView>
        <Text style={styles.heading}>Today's Progress</Text>

        <View style={styles.topWidgetContainer}>
          <View style={styles.topWidget}>
            <View style={styles.topWidgetHeadingContainer}>
              <Text style={styles.topWidgetHeading}>Calories</Text>
              <Image
                source={require("@/assets/images/flame.png")}
                style={styles.topWidgetIcon}
              />
            </View>

            <View style={styles.topWidgetValueContainer}>
              <Text style={styles.topWidgetValue}>1750</Text>
              <Text style={styles.topWidgetUnit}>Kcal</Text>
            </View>
          </View>
          <View style={styles.topWidget}>
            <View style={styles.topWidgetHeadingContainer}>
              <Text style={styles.topWidgetHeading}>Calories</Text>
              <Image
                source={require("@/assets/images/water.png")}
                style={styles.topWidgetIcon}
              />
            </View>

            <View style={styles.topWidgetValueContainer}>
              <Text style={styles.topWidgetValue}>1750</Text>
              <Text style={styles.topWidgetUnit}>Kcal</Text>
            </View>
          </View>
        </View>

        <View style={styles.compareNowContainer}>
          <View>
            <Text style={styles.compareNowText}>
              Track Your Progress Each Month With Photos
            </Text>
            <TouchableOpacity style={styles.compareNowButton}>
              <Text style={styles.buttonText}>Compare Now</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("@/assets/images/calender.png")} />
        </View>
        <View style={styles.workoutHeadingContainer}>
          <Text style={styles.workouts}>Workout Progress</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>
        <ListCard
          title="Total body & Cardio"
          imageSource={require("@/assets/images/highIntensity.png")}
          progress={30}
        />
        <ListCard
          title="High Intensity Workout"
          imageSource={require("@/assets/images/highIntensity.png")}
          progress={50}
        />

        <View style={styles.compareNowContainer}>
          <View>
            <Text style={styles.compareNowText}>
              Track Your Progress Each Month With Photos
            </Text>
            <TouchableOpacity style={styles.compareNowButton}>
              <Text style={styles.buttonText}>Compare Now</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("@/assets/images/calculator.png")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0.2,
    color: Colors.light.text,
    paddingVertical: 10,
  },

  topWidgetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 11,
  },

  topWidget: {
    backgroundColor: Colors.light.secondary,
    borderRadius: 26,
    padding: 14,
    width: 152,
    height: 134,
  },

  topWidgetHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  topWidgetHeading: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0.16,
  },

  topWidgetIcon: {
    width: 24,
    height: 24,
  },

  topWidgetValueContainer: {
    marginTop: 30,
  },

  topWidgetValue: {
    color: Colors.light.text,
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 26.4,
    letterSpacing: 0.2,
  },

  topWidgetUnit: {
    color: Colors.light.mute,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16.8,
    letterSpacing: 0.14,
  },

  compareNowContainer: {
    marginTop: 14,
    width: "100%",
    height: 137,
    backgroundColor: Colors.light.secondary,
    borderRadius: 22,
    paddingVertical: 25,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  compareNowText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.light.text,
    lineHeight: 18,
    maxWidth: 165,
  },

  compareNowButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    color: Colors.light.text,
    maxWidth: 95,
  },

  buttonText: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "600",
    color: "#000000",
  },

  calenderImage: {
    width: 116,
    height: 76,
  },

  workoutHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  workouts: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 24,
    fontWeight: "500",
    color: Colors.light.text,
  },

  viewAll: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.light.mute,
  },
});

export default index;
