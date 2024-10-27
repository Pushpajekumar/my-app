import React, { useRef, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { screenHeight } from "@/constants/dimensions";

const AgeSelector = () => {
  const [selectedAge, setSelectedAge] = useState<number>(25);
  const flatListRef = useRef<FlatList>(null);

  const ages = Array.from({ length: 81 }, (_, i) => i + 10); // Ages from 10 to 90

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / 100); // Updated height for larger spacing
    if (index >= 0 && index < ages.length) {
      setSelectedAge(ages[index]);
    }
  };

  const getFontSize = (item: number) => {
    const distanceFromCenter = Math.abs(selectedAge - item) || 0; // Fallback to 0 if NaN
    return Math.max(26, 44 - distanceFromCenter * 3); // Larger font size for selected
  };

  const getOpacity = (item: number) => {
    const distanceFromCenter = Math.abs(selectedAge - item) || 0; // Fallback to 0 if NaN
    return Math.max(0.3, 1 - distanceFromCenter * 0.25); // Increased opacity effect
  };

  return (
    <View style={styles.ageSelectorContainer}>
      <FlatList
        ref={flatListRef}
        data={ages}
        keyExtractor={(item) => item.toString()}
        onScroll={handleScroll}
        snapToInterval={100} // Updated to match increased item height
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 140 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.ageItem,
              item === selectedAge && styles.selectedAgeItem,
            ]}
          >
            <Text
              style={[
                styles.ageText,
                {
                  fontSize: getFontSize(item),
                  opacity: getOpacity(item),
                },
                item === selectedAge
                  ? styles.selectedAgeText
                  : styles.unselectedAgeText,
              ]}
            >
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ageSelectorContainer: {
    marginTop: screenHeight * 0.1,
    height: 300, // Increased height to fit larger items
    overflow: "hidden",
    alignItems: "center",
  },
  ageItem: {
    height: 100, // Increased item height for more spacing
    justifyContent: "center",
    alignItems: "center",
  },
  selectedAgeItem: {
    borderColor: Colors.light.primary,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    width: "100%",
  },
  ageText: {
    fontSize: 52, // Base font size for unselected items
  },
  selectedAgeText: {
    color: Colors.light.primary,
    fontWeight: "bold",
  },
  unselectedAgeText: {
    color: Colors.light.mute,
  },
});

export default AgeSelector;
