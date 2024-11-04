import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Header } from "react-native/Libraries/NewAppScreen";
import HomeHeader from "@/components/home/home-header";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import ProfileInfo from "@/components/profile/profile-info";
import ProfileNav from "@/components/profile/profile-nav";

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

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        label="Account"
        handleBack={() => router.navigate("/(tabs)")}
        isProfile
      />
      <ProfileInfo
        data={userProfileData}
        onEditPress={() => console.log("Edit pressed")}
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
