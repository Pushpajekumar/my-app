import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "@/components/globals/onboarding";
import { Colors } from "@/constants/Colors";

const onboardingData = [
  {
    imageSource: require("@/assets/images/onboard-first-screen.jpg"),
    mainText: "WORK HARD",
    lifestyleText: "That’s a Lifestyle",
    description: "What seems impossible today will one day become your warm-up",
  },
  {
    imageSource: require("@/assets/images/onboard-second-screen.jpg"),
    mainText: "MOVE AHEAD",
    lifestyleText: "Move Ahead",
    description: "Every step you take brings you closer to your goal",
  },
  {
    imageSource: require("@/assets/images/onboard-third-screen.jpg"),
    mainText: "STAY CALM",
    lifestyleText: "Never Give Up",
    description: "Push yourself because no one else is going to do it for you",
  },
];

const Index = () => {
  const router = useExpoRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // AsyncStorage.clear(); // Clear AsyncStorage for testing purposes

    const checkFirstTime = async () => {
      try {
        const isAuthenticated = true;
        const firstTime = await AsyncStorage.getItem("first_time");

        // If this isn't the first time and the user is authenticated, navigate to the main screen
        if (firstTime && isAuthenticated) {
          router.replace("/(tabs)");
          return;
        }

        // If this isn't the first time and the user is not authenticated, navigate to login
        if (firstTime && !isAuthenticated) {
          router.replace("(auth)/login");
          return;
        }

        // Otherwise, set the flag and show onboarding
        await AsyncStorage.setItem("first_time", "false");
      } catch (e) {
        console.error("Error checking first time flag", e);
      } finally {
        setIsLoading(false); // Complete loading once checks are done
      }
    };

    checkFirstTime();
  }, []);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("(auth)/login");
    }
  };

  const handleSkip = () => {
    router.replace("(auth)/login");
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.light.primary} />
      </View>
    );
  }

  return (
    <OnboardingScreen
      imageSource={onboardingData[currentIndex].imageSource}
      mainText={onboardingData[currentIndex].mainText}
      lifestyleText={onboardingData[currentIndex].lifestyleText}
      description={onboardingData[currentIndex].description}
      paginationIndex={currentIndex}
      onNext={handleNext}
      onSkip={handleSkip}
    />
  );
};

export default Index;
