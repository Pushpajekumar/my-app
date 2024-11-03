import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const FilterNav = () => {
  const router = useRouter();

  const filter = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Workout", value: "workout" },
    { id: 3, name: "Exercise", value: "exercise" },
    { id: 4, name: "Diet", value: "diet" },
  ];

  return (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {filter.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.filterBox,
              item.value === "all" && {
                backgroundColor: Colors.light.primary,
              },
              item.value === "all" && {
                borderColor: Colors.light.primary,
              },
            ]}
            onPress={() => router.navigate("/(tabs)")} // Update selected filter
          >
            <Text
              style={[
                styles.filterText,
                item.value === "all" && { color: "#000000" },
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  filterBox: {
    borderRadius: 29,
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.light.text,
  },

  filterText: {
    color: Colors.light.text,
    margin: 10,
    fontSize: 14,
  },
});

export default FilterNav;
