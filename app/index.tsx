import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreen from "@/components/globals/onboarding";

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
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkFirstTime = async () => {
      const value = await AsyncStorage.getItem("first_time");

      if (value) {
        router.push("(auth)/login");
      } else {
        await AsyncStorage.setItem("first_time", "false");
        setIsLoading(false); // Load onboarding screen only if it's the first time
      }
    };

    checkFirstTime();
  }, []);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("(auth)/login");
    }
  };

  const handleSkip = () => {
    router.push("(auth)/login");
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#F2D679" />
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
