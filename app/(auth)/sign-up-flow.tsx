import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import AgeSelector from "@/components/auth/age-selector";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Button from "@/components/ui/button";
import { useRouter } from "expo-router";
import { getFontSize } from "@/utils/font";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const screenHeight = Dimensions.get("window").height;

const SignUpFlow = () => {
  const router = useRouter();
  let paginationIndex = 3;
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState("kg");
  const [selectedHeightUnit, setSelectedHeightUnit] = useState("cm");

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    scale.value = 1;
    opacity.value = 1;
  };

  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.7);

  const animatedSelectorStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }],
    opacity: withTiming(opacity.value, { duration: 500 }),
  }));

  const toggleWeightUnit = () => {
    setSelectedWeightUnit((prev) => (prev === "kg" ? "lbs" : "kg"));
  };

  const toggleHeightUnit = () => {
    setSelectedHeightUnit((prev) => (prev === "cm" ? "inch" : "cm"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AntDesign name="left" size={24} color={Colors.light.primary} />
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {[0, 1, 2, 3].map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.paginationDot,
              paginationIndex === index && styles.activeDot,
              index === paginationIndex && animatedSelectorStyle,
            ]}
          />
        ))}
      </View>

      {/* Headings */}
      <View style={styles.headig_container}>
        {paginationIndex === 0 && (
          <Text style={styles.heading}>What is your goal?</Text>
        )}
        {paginationIndex === 1 && (
          <Text style={styles.heading}>What is your gender?</Text>
        )}
        {paginationIndex === 2 && (
          <Text style={styles.heading}>How old are you?</Text>
        )}
        {paginationIndex === 3 && (
          <Text style={styles.heading}>Let us know you better</Text>
        )}
      </View>

      {/* Selectors for Different Steps */}
      {paginationIndex === 0 && (
        <View style={styles.selector_container}>
          {["Be Healthier", "Lose Weight", "Gain Weight"].map((text, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.selector,
                selectedIndex === index && styles.selectedSelector,
              ]}
              onPress={() => handleSelect(index)}
            >
              <Animated.Text
                style={[
                  styles.selector_text,
                  selectedIndex === index && styles.selectedText,
                  index === selectedIndex && animatedSelectorStyle,
                ]}
              >
                {text}
              </Animated.Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {paginationIndex === 1 && (
        <View style={styles.human_selector_container}>
          {[
            {
              src: require("@/assets/images/male.png"),
              alt: "Male",
              label: "Male",
              width: 128,
              height: 259,
            },
            {
              src: require("@/assets/images/female.png"),
              alt: "Female",
              label: "Female",
              width: 106,
              height: 259,
            },
          ].map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.selector_background,
                selectedIndex === index
                  ? styles.selectedSelectorBackground
                  : styles.unselectedSelectorBackground,
              ]}
              onPress={() => handleSelect(index)}
            >
              <Animated.Image
                source={image.src}
                alt={image.alt}
                style={[
                  styles.selector_image,
                  { width: image.width, height: image.height },
                  selectedIndex !== index && styles.grayscaleImage,
                  selectedIndex === index && animatedSelectorStyle,
                ]}
              />
              <Text
                style={[
                  styles.imageLabel,
                  selectedIndex === index
                    ? styles.selectedLabel
                    : styles.unselectedLabel,
                ]}
              >
                {image.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {paginationIndex === 2 && <AgeSelector />}

      {paginationIndex === 3 && (
        <View style={styles.form_container}>
          <View style={styles.form}>
            <Text style={styles.label}>Weight</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={`Enter your weight`}
                placeholderTextColor={Colors.light.mute}
                keyboardType="numeric"
              />
              <View style={styles.toggleContainer}>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    selectedWeightUnit === "lbs" && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedWeightUnit("lbs")}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      selectedWeightUnit === "lbs" && styles.selectedText,
                    ]}
                  >
                    LBS
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    selectedWeightUnit === "kg" && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedWeightUnit("kg")}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      selectedWeightUnit === "kg" && styles.selectedText,
                    ]}
                  >
                    KG
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Height</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={`Enter your height`}
                placeholderTextColor={Colors.light.mute}
                keyboardType="numeric"
              />
              <View style={styles.toggleContainer}>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    selectedHeightUnit === "feet" && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedHeightUnit("feet")}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      selectedHeightUnit === "feet" && styles.selectedText,
                    ]}
                  >
                    FEET
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    selectedHeightUnit === "cm" && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedHeightUnit("cm")}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      selectedHeightUnit === "cm" && styles.selectedText,
                    ]}
                  >
                    CM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}

      <Button
        style={{
          marginTop:
            selectedIndex === 0 
              ? screenHeight * 0.2
              : selectedIndex === 1
              ? screenHeight * 0.2
              : selectedIndex === 2
              ? screenHeight * 0.1
              : screenHeight * 0.3, 
        }}
        onPress={() => router.push("/optional-info")}
      >
        <Text style={styles.button_text}>Next</Text>
      </Button>
    </SafeAreaView>
  );
};

export default SignUpFlow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: Colors.light.background,
  },
  pagination: {
    flexDirection: "row",
    gap: 4,
    marginTop: 10,
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
  headig_container: {
    marginTop: 20,
  },
  heading: {
    fontSize: getFontSize(20),
    fontWeight: "500",
    color: Colors.light.text,
    lineHeight: 24,
  },
  selector_container: {
    marginTop: 60,
  },
  selector: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  selectedSelector: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  selector_text: {
    color: "white",
    textAlign: "center",
    fontSize: getFontSize(16),
    fontWeight: "500",
  },
  selectedText: {
    color: Colors.light.background,
  },
  button_text: {
    fontSize: getFontSize(16),
    fontWeight: "500",
    color: "black",
    lineHeight: 20,
  },
  human_selector_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: screenHeight * 0.13,
    alignItems: "center",
  },
  selector_background: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: 180,
  },
  selectedSelectorBackground: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
    borderWidth: 1,
  },
  unselectedSelectorBackground: {
    backgroundColor: Colors.light.background,
    borderColor: "white",
    borderWidth: 1,
  },
  selector_image: {
    resizeMode: "contain",
  },
  grayscaleImage: {
    tintColor: "gray",
  },
  imageLabel: {
    fontSize: getFontSize(18),
    fontWeight: "500",
    lineHeight: 30,
    marginTop: 10,
  },
  selectedLabel: {
    color: Colors.light.text,
  },
  unselectedLabel: {
    color: Colors.light.mute,
  },

  form: {
    marginTop: 10,
  },

  label: {
    fontSize: getFontSize(14),
    fontWeight: "400",
    color: Colors.light.text,
    lineHeight: 17,
    marginBottom: 5,
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 3,
    borderColor: Colors.light.text,
    color: Colors.light.text,
    paddingHorizontal: 10,
  },

  form_container: {
    marginTop: 20,
  },

  inputContainer: {
    position: "relative",
  },

  toggleContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -16.8 }],
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  toggleButton: {
   justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white", // Default inactive background color
    height: 35,
  },

  selectedButton: {
    backgroundColor: Colors.light.primary,
  },

  toggleText: {
    color: Colors.light.mute, // Muted color for inactive text
    fontSize: 12, // Smaller font size
    fontWeight: "500",
  },
});
