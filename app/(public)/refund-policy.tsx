import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const refundPolicy = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack label="Refund Policy" handleBack={() => router.back()} />
        <View style={styles.text_container}>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </Text>
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

  text_container: {
    paddingVertical: 20,
  },

  text: {
    fontSize: 16,
    color: Colors.light.mute,
    lineHeight: 22,
  },
});

export default refundPolicy;
