import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const WorkoutRoute = () => (
  <View style={styles.scene}>
   <View style={styles.noNotifyContainer}>
          <Image
            source={require("@/assets/images/no-notification.png")}
            width={159}
            height={203}
            style={styles.image}
          />
          <Text style={styles.noNotifyText}>You Haven't Any Workout</Text>
        </View>
  </View>
);

const DietRoute = () => (
  <View style={styles.scene}>
   <View style={styles.noNotifyContainer}>
          <Image
            source={require("@/assets/images/no-notification.png")}
            width={159}
            height={203}
            style={styles.image}
          />
          <Text style={styles.noNotifyText}>You Haven't Any Diet</Text>
        </View>
  </View>
);

const renderScene = SceneMap({
  workout: WorkoutRoute,
  diet: DietRoute,
});

const Index = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "workout", title: "Workout" },
    { key: "diet", title: "Diet" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        label="Assigned Workout & Diet"
        handleBack={() => router.back()}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.light.primary }}
            style={{
              backgroundColor: Colors.light.background,
              borderBottomWidth: 1,
              borderBottomColor: Colors.light.mute,
            }}
            labelStyle={{ color: Colors.light.text }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
  },
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  noNotifyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  noNotifyText: {
    color: Colors.light.text,
    fontSize: 18,
    fontWeight: "500",
    marginTop: 40,
    lineHeight: 21,
  },

  image: {
    width: 159,
    height: 203,
  },
});

export default Index;
