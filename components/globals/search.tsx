import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type SearchProps = {
  showBackArrow?: boolean;
  handleBackFn?: () => void;
  showSearchIcon?: boolean;
};

const SearchComp = ({ showBackArrow, handleBackFn, showSearchIcon }: SearchProps) => {
  const router = useRouter();

  function handleBack() {
    router.navigate("/(tabs)"); // Go back to the previous screen
  }

  return (
    <View style={styles.search}>
      {showBackArrow && (
        <AntDesign
          name="left"
          size={24}
          color={Colors.light.primary}
          onPress={handleBackFn || handleBack}
        />
      )}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={Colors.light.text}
        />

        {showSearchIcon && (
          <AntDesign
            name="search1"
            size={24}
            color={Colors.light.text}
            style={styles.image}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  searchContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.light.text,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 5,
    height: 44,
    position: "relative",
  },

  input: {
    flex: 1,
    color: Colors.light.text,
    fontSize: 14,
    paddingVertical: 10,
  },

  image: {
    width: 24,
    height: 24,
  },
});

export default SearchComp;
