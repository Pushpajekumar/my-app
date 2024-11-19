import { Colors } from "@/constants/Colors";
import { getFontSize } from "@/utils/font";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type HomeEquipmentBasedExerciseProps = {
  data: {
    id: number;
    name: string;
    imgUrl: any;
  }[];
};

const HomeEquipmentBasedExercise = ({
  data,
}: HomeEquipmentBasedExerciseProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Equipment-Based Exercise</Text>
        <AntDesign name="right" size={20} color={Colors.light.primary} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => router.push("/(public)/exercise")}
          >
            <Image
              source={item.imgUrl}
              alt="Explore Icon"
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.flatList}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: getFontSize(20),
    fontWeight: "500",
  },

  flatList: {
    marginTop: 12,
  },
  itemContainer: {
    position: "relative",
  },
  image: {
    width: 130,
    height: 175,
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "#21202090",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    paddingVertical: 8,
    fontSize: getFontSize(16),
    fontWeight: "500",
    textAlign: "center",
  },
  separator: {
    width: 20,
  },
});

export default HomeEquipmentBasedExercise;
