import Featured from "@/components/globals/featured";
import HeaderBack from "@/components/globals/header-back";
import SearchComp from "@/components/globals/search";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const mealsAndPackagesData = [
  {
    id: 1,
    name: "Silver Package: Meal Plan & 8 IN-Person 30 Min PT Sessions",
    imgUrl: require("@/assets/images/image 196.jpg"),
  },
  {
    id: 2,
    name: "Silver Package: Meal Plan & 8 IN-Person 30 Min PT Sessions",
    imgUrl: require("@/assets/images/image 197.jpg"),
  },
  {
    id: 3,
    name: "Silver Package: Meal Plan & 8 IN-Person 30 Min PT Sessions",
    imgUrl: require("@/assets/images/image 196.jpg"),
  },
];
const inPersonTrainingData = [
  {
    id: 1,
    name: "30 min In Person Training Session (4x Per Week)",
    imgUrl: require("@/assets/images/image 195.jpg"),
  },
  {
    id: 2,
    name: "30 min In Person Training Session (4x Per Week)",
    imgUrl: require("@/assets/images/image 197.jpg"),
  },
  {
    id: 3,
    name: "30 min In Person Training Session (4x Per Week)",
    imgUrl: require("@/assets/images/image 194.jpg"),
  },
];
const weightLossProgramData = [
  {
    id: 1,
    name: "Weight-loss Program",
    imgUrl: require("@/assets/images/image 194.jpg"),
  },
  {
    id: 2,
    name: "Weight-gain Program",
    imgUrl: require("@/assets/images/image 199.jpg"),
  },
  {
    id: 3,
    name: "Weight-loss Program",
    imgUrl: require("@/assets/images/image 194.jpg"),
  },
];

const router = useRouter();

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderBack label="Programs & Plans" handleBack={() => router.back()} />
        <SearchComp />
        <Featured data={mealsAndPackagesData} title="Meals and Packages" />
        <Featured data={weightLossProgramData} title="Programs" />
        <Featured data={inPersonTrainingData} title="In Person Training" />
        <Featured data={mealsAndPackagesData} title="Online Training" />
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
