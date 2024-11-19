import HeaderBack from "@/components/globals/header-back";
import Button from "@/components/ui/button";
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const PlanDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require("@/assets/images/image 195.jpg")}
            style={styles.image}
            alt="Plan Details"
          />

          <View style={styles.content}>
            <Text style={styles.title}>Get Ripped</Text>

            <View style={styles.priceContainer}>
              <Text style={styles.price}>$250 Every 1 month</Text>
              <Text style={styles.subtitle}>Recurring Subscription</Text>
            </View>

            <View>
              <Text style={styles.description}>
                Are you ready for your transformation? LET’S GO! Are you a
                Bodybuilder looking to enter a contest prep? Or are you someone
                simply ready and willing to put in the necessary work to Get
                Ripped in as little as 90 days!? This is an accelerated program
                designed to shed unwanted body weight and get you lean in a
                short period of time. Opt with this package deal and you’ll
                receive a customized training program that you'll follow on your
                own time, a customized nutrition plan that will be tracked by
                your assigned coach, weekly check-ins, and 24/7 access to your
                coach. Your 100% discipline and dedication is required to make
                this goal attainable. The Get Ripped in as little 90 days
                Program.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Purchase Now</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  image: {
    width: screenWidth, // full screen width
    height: screenHeight * 0.3, // 40% of the screen height
    resizeMode: "cover",
    alignSelf: "center",
  },
  content: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  priceContainer: {
    marginTop: 4,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light.mute,
  },
  price: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.light.primary,
  },
  subtitle: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
  },
  description: {
    color: Colors.light.mute,
    fontSize: 14,
    marginTop: 8,
    paddingBottom: 80,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
    backgroundColor: Colors.light.background,
  },
  button: {
    backgroundColor: Colors.light.primary,
    height: 56,
    borderRadius: 12,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});

export default PlanDetails;
