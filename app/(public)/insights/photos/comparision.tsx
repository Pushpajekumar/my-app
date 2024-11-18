import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import HeaderBack from "@/components/globals/header-back";
import { router } from "expo-router";

const images = [
  {
    id: 7,
    img: require("@/assets/images/image-7.png"),
  },
  {
    id: 8,
    img: require("@/assets/images/image-8.png"),
  },
  {
    id: 9,
    img: require("@/assets/images/image-9.png"),
  },
  {
    id: 10,
    img: require("@/assets/images/image-10.png"),
  },
  {
    id: 11,
    img: require("@/assets/images/image-11.png"),
  },
  {
    id: 12,
    img: require("@/assets/images/image-12.png"),
  },
];

const comparision = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        isInsights
        label="Comparision"
        handleBack={() => router.back()}
      />
      <View style={styles.filter_container}>
        <TouchableOpacity style={styles.filter_button}>
          <Text style={styles.filter_button_text}>Month/Year</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter_button}>
          <Text style={styles.filter_button_text}>Month/Year</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.image_container}>
        {images.map((image) => (
          <Image source={image.img} key={image.id} style={styles.images} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },

  filter_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  filter_button: {
    height: 40,
    width: 150,
    backgroundColor: Colors.light.secondary,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  filter_button_text: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: "bold", 
  },

  image_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  images: {
    width: 150,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
    objectFit: "cover",
  },
});

export default comparision;
