import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import HeaderBack from "@/components/globals/header-back";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const result = [
  {
    id: 1,
    name: "Hammer Curls",
    image: require("@/assets/images/search-result.png"),
    desc: "You have a new workout plan",
    date: "2024-11-02",
  },
  {
    id: 2,
    name: "Push Ups",
    image: require("@/assets/images/search-result.png"),
    desc: "You have a new workout plan",
    date: "2023-10-02",
  },
  {
    id: 3,
    name: "Squats",
    image: require("@/assets/images/search-result.png"),
    desc: "You have a new workout plan",
    date: "2023-10-03",
  },
  {
    id: 4,
    name: "Plank",
    image: require("@/assets/images/search-result.png"),
    desc: "You have a new workout plan",
    date: "2023-10-04",
  },
];

const notification = () => {
  const [notifications, setNotifications] = React.useState(1);

  const router = useRouter();

  const isToday = (date: string) => {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0]; // "YYYY-MM-DD"
    return date === formattedToday;
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack
        label="Notification"
        handleBack={() => router.navigate("/(tabs)")}
      />
      {notifications ? (
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          {result.map((item) => (
            <View key={item.id} style={styles.result_container}>
              <View style={styles.result_box}>
                <Image source={item.image} style={styles.result_image} />

                <View>
                  <Text style={styles.result_title}>{item.name}</Text>
                  <Text style={styles.result_desc}>{item.desc}</Text>
                </View>
              </View>

              <View style={styles.date_box}>
                {isToday(item.date) ? (
                  <View style={styles.todayContainer}>
                    <Text style={styles.today_date}>Today</Text>
                    <View style={styles.greenDot} />
                  </View>
                ) : (
                  <Text style={styles.date}>{item.date}</Text>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.noNotifyContainer}>
          <Image
            source={require("@/assets/images/no-notification.png")}
            width={159}
            height={203}
            style={styles.image}
          />
          <Text style={styles.noNotifyText}>You Haven't Any Notification</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 20,
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

  body: {
    flex: 1,
    marginTop: 10,
  },

  result_container: {
    backgroundColor: Colors.light.secondary,
    shadowColor: Colors.light.mute,
    borderRadius: 12,
    padding: 10,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },

  result_box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  result_image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },

  result_title: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },

  result_desc: {
    fontSize: 12,
    color: Colors.light.mute,
  },

  date_box: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginBottom: 20,
  },

  todayContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 3,
    backgroundColor: "green",
    marginRight: 4,
  },

  date: {
    fontSize: 12,
    color: Colors.light.mute,
  },
  today_date: {
    fontSize: 12,
    color: "white",
  },
});

export default notification;
