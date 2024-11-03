import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import SearchComp from "@/components/globals/search";

const index = () => {
  const router = useRouter();

  function handleBack() {
    router.navigate("/(tabs)"); // Go back to the previous screen
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        label="Discover"
        handleBack={() => router.navigate("/(tabs)")}
      />
      <ScrollView>
      <SearchComp showSearchIcon />
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
