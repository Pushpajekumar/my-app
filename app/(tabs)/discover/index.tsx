import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <HeaderBack
        label="Discover"
        handleBack={() => router.navigate("/(tabs)")}
      />
      <ScrollView style={styles.container}>
        <View>
          <Text>Discover Page!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    paddingHorizontal: 20,
  },
});


export default index;
