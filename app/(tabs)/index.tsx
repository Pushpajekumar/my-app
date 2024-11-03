import HomeSearch from "@/components/home/home-search";
import HomeHeader from "@/components/home/home-header";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCarousel from "@/components/home/home-carousel";
import HomeExplore from "@/components/home/home-explore";
import HomeEquipmentBasedExercise from "@/components/home/home-eq-based";
import Featured from "@/components/globals/featured";

export default function HomeScreen() {
  const homeExploreData = [
    {
      id: 1,
      name: "Workout",
      imgUrl: require("@/assets/images/Body_part_image-2.png"),
    },
    {
      id: 2,
      name: "Diet Plans",
      imgUrl: require("@/assets/images/Body_part_image.png"),
    },
    {
      id: 3,
      name: "Recipie",
      imgUrl: require("@/assets/images/Body_part_image-1.png"),
    },
    {
      id: 4,
      name: "Calculator",
      imgUrl: require("@/assets/images/Body_part_image-2.png"),
    },
    {
      id: 5,
      name: "Exercise",
      imgUrl: require("@/assets/images/Body_part_image-1.png"),
    },
    {
      id: 6,
      name: "Yoga",
      imgUrl: require("@/assets/images/Body_part_image-2.png"),
    },
  ];

  const homeEqData = [
    {
      id: 1,
      name: "Dumbells",
      imgUrl: require("@/assets/images/Image (1).png"),
    },
    {
      id: 2,
      name: "Benches",
      imgUrl: require("@/assets/images/Image (2).png"),
    },
    {
      id: 3,
      name: "Treadmill",
      imgUrl: require("@/assets/images/Image (3).png"),
    },
    {
      id: 4,
      name: "Weights",
      imgUrl: require("@/assets/images/Image (3).png"),
    },
    {
      id: 5,
      name: "Lifting",
      imgUrl: require("@/assets/images/Image (1).png"),
    },
    {
      id: 6,
      name: "Demo",
      imgUrl: require("@/assets/images/Image (2).png"),
    },
  ];

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeSearch />
        <HomeCarousel />
        <HomeExplore data={homeExploreData} />
        <HomeEquipmentBasedExercise data={homeEqData} />
        <Featured data={featuredDiet} title="Featured Workouts" />
        <Featured data={featuredDiet} title="Featured Exercise" />
        <Featured data={featuredDiet} title="Featured Diet" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
