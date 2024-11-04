import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import SearchComp from "@/components/globals/search";
import FilterNav from "@/components/globals/filter-nav";
import Featured from "@/components/globals/featured";

const featuredDiet = [
  {
    id: 1,
    name: "Total body & Cardio (gym) ",
    imgUrl: require("@/assets/images/Image (3)2.jpg"),
  },
  {
    id: 2,
    name: "Abs Workout",
    imgUrl: require("@/assets/images/Image (2)1.jpg"),
  },
  {
    id: 3,
    name: "Legs & Glutes",
    imgUrl: require("@/assets/images/Image (3)2.jpg"),
  },
  {
    id: 4,
    name: "Arms & Shoulders",
    imgUrl: require("@/assets/images/Image (2)1.jpg"),
  },
  {
    id: 5,
    name: "Yoga & Stretching",
    imgUrl: require("@/assets/images/Image (3)2.jpg"),
  },
];

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        label="Discover"
        handleBack={() => router.navigate("/(tabs)")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchComp showSearchIcon />
        <FilterNav />
        <Featured data={featuredDiet} title="Exercise" />
        <Featured data={featuredDiet} title="Workout" />
        <Featured data={featuredDiet} title="Diet" isLast />
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
});

export default index;
