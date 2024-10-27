import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import Button from "../ui/button";

interface OnboardingScreenProps {
  imageSource: any;
  mainText: string;
  lifestyleText: string;
  description: string;
  paginationIndex: number;
  onNext: () => void;
  onSkip: () => void; // New prop for handling skip action
}

export default function OnboardingScreen({
  imageSource,
  mainText,
  lifestyleText,
  description,
  paginationIndex,
  onNext,
  onSkip, // Destructure onSkip prop
}: OnboardingScreenProps) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} alt="onboarding-image" />
      <View style={styles.overlay}>
        <View style={styles.skipContainer}>
          <Text style={styles.skipText} onPress={onSkip}>
            Skip
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.lifestyleText}>{lifestyleText}</Text>
            <Text style={styles.mainText}>{mainText}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Button
            title="Next"
            onPress={onNext}
            disabled={false}
            activeOpacity={0.6}
          />

          <View style={styles.pagination}>
            <View
              style={[
                styles.paginationDot,
                paginationIndex === 0 && styles.activeDot,
              ]}
            />
            <View
              style={[
                styles.paginationDot,
                paginationIndex === 1 && styles.activeDot,
              ]}
            />
            <View
              style={[
                styles.paginationDot,
                paginationIndex === 2 && styles.activeDot,
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
  },
  skipContainer: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  skipText: {
    color: Colors.light.primary,
    fontWeight: "500",
    fontSize: 14,
  },
  contentContainer: {
    position: "absolute",
    top: "45%", // Start from 50% of the screen height
    width: "100%",
    padding: 20,
  },
  lifestyleText: {
    color: Colors.light.text,
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 1.5,
  },
  mainText: {
    color: Colors.light.primary,
    fontWeight: "bold",
    fontSize: 60,
    marginTop: 20,
    lineHeight: 64,
  },
  description: {
    color: Colors.light.text,
    fontWeight: "500",
    fontSize: 13,
    marginTop: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: "7%",
    width: "100%",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: Colors.light.primary,
    marginTop: 96,
  },
  pagination: {
    flexDirection: "row",
    gap: 4,
    marginTop: 32,
  },
  paginationDot: {
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.light.text,
    flex: 1,
  },
  activeDot: {
    backgroundColor: Colors.light.primary,
  },
});
