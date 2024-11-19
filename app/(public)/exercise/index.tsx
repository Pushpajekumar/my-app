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
import SearchComp from "@/components/globals/search";
import { Colors } from "@/constants/Colors";

const exercise = () => {
  const exercises = [
    {
      id: 1,
      name: "Weight Gain Workouts",
      image: require("@/assets/images/exercise-1.png"),
    },
    {
      id: 2,
      name: "Cardio Workouts",
      image: require("@/assets/images/exercise-2.png"),
    },
    {
      id: 3,
      name: "Strength Training",
      image: require("@/assets/images/exercise-3.png"),
    },
    {
      id: 4,
      name: "Strength Training",
      image: require("@/assets/images/exercise-4.png"),
    },
    {
      id: 5,
      name: "Strength Training",
      image: require("@/assets/images/exercise-5.png"),
    },
  ];

  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeaderBack label="Exercises" handleBack={() => router.back()} />
      <View style={styles.search_container}>
        <SearchComp />
      </View>

      <ScrollView style={styles.featured_container}>
        {exercises?.map((exercise) => (
          <TouchableOpacity
            key={exercise?.id}
            style={styles.featured_box}
            onPress={() => router.push("/(public)/exercise/exercise-details")}
          >
            <Image source={exercise?.image} style={styles.featured_image} />
            <View style={styles.featured_text_box}>
              <Text style={styles.featured_text}>{exercise?.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 35,
    paddingHorizontal: 20,
  },

  search_container: {
    marginTop: 20,
  },

  featured_container: {
    marginTop: 20,
  },

  featured_box: {
    position: "relative",
    marginBottom: 20,
  },

  featured_image: {
    width: "100%",
    height: 170,
    borderRadius: 12,
  },

  featured_text_box: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#212020",
    opacity: 0.9,
  },
  featured_text: {
    color: "white",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default exercise;
