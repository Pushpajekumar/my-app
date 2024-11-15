import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        isInsights
        label="Progress Photos"
        handleBack={() => router.back()}
      />

      <View style={styles.reminder_container}>
        <View style={styles.remnder_photo_container}>
          <Image
            source={require("@/assets/images/reminders-calender.png")}
            style={styles.reminder_image}
          />
        </View>
        <View>
          <Text style={styles.reminder_heading}>Reminder!</Text>
          <Text style={styles.reminder_text}>Next Photos Fall On July 08</Text>
        </View>
      </View>

      <View style={styles.compare_container}>
        <Text style={styles.compare_text}>Compare my Photo</Text>
        <TouchableOpacity style={styles.compare_button}>
          <Text style={styles.compare_button_text}> Compare</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.photo_container}>
        <View style={styles.photo_container_heading_container}>
          <View>
            <Text style={styles.photo_container_heading}>Recent Uploaded</Text>
            <Text style={styles.see_more}>See more</Text>
          </View>
          <View style={styles.cam_icon_container}>
            <Image
              source={require("@/assets/images/Camera.png")}
              style={styles.cam_icon}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
  },
  reminder_container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 90,
    borderRadius: 20,
    backgroundColor: Colors.light.primary,
    padding: 15,
    gap: 10,
  },
  remnder_photo_container: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: Colors.light.text,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },

  reminder_image: {
    height: 34,
    width: 38,
  },

  reminder_heading: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000000",
  },
  reminder_text: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: "500",
    color: "#000000",
  },

  compare_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.light.secondary,
    height: 57,
    borderRadius: 16,
    marginTop: 20,
  },

  compare_text: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.light.text,
  },

  compare_button: {
    height: 28,
    borderRadius: 50,
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  compare_button_text: {
    fontSize: 12,
    color: "#000000",
  },

  photo_container: {
    flex: 1,
    marginTop: 20,
  },

  photo_container_heading_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  photo_container_heading: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: Colors.light.primary,
  },

  see_more: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    color: Colors.light.mute,
  },

  cam_icon_container: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: Colors.light.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  cam_icon: {
    width: 15,
    height: 14,
  },
});

export default index;
