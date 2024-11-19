import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import ProfileInfo from "@/components/profile/profile-info";
import ProfileNav from "@/components/profile/profile-nav";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const index = () => {
  const userProfileData = {
    name: "John Doe",
    email: "john@example.com",
    imageUrl: require("@/assets/images/profile-pic.png"),
    weight: "55Kg",
    height: "5.5 ft.in",
    age: "45 Years",
  };

  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom - 70,
        },
      ]}
    >
      <HeaderBack
        label="Account"
        handleBack={() => router.navigate("/(tabs)")}
        isProfile
      />
      <ProfileInfo
        data={userProfileData}
        onEditPress={() => router.push("/(public)/edit-profile")}
      />
      <ProfileNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
});
export default index;
