import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import HeaderBack from "@/components/globals/header-back";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { screenHeight, screenWidth } from "@/constants/dimensions";
import { Video, ResizeMode } from "expo-av";


const exerciseDetails = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [status, setStatus] = useState({});

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const video = useRef(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <Text style={styles.tabContent}>This is the overview content.</Text>
        );
      case "Instructions":
        return (
          <Text style={styles.tabContent}>
            These are the instructions for the exercise.
          </Text>
        );
      case "Tips":
        return (
          <Text style={styles.tabContent}>
            These are some helpful tips for the exercise.
          </Text>
        );
      default:
        return null;
    }
  };

  const router = useRouter();



  return (
    <View style={styles.container}>
      <HeaderBack label="Hammer Curls" handleBack={() => router.back()} />

      <Video
        ref={video}
        style={styles.video}
        source={require("@/assets/images/exercise.mp4")}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={toggleAccordion}
      >
        <View style={styles.accordion_container}>
          <MaterialCommunityIcons
            name="dumbbell"
            size={24}
            color={Colors.light.primary}
          />
          <Text style={styles.accordionTitle}>Exercise Profile</Text>
        </View>
        <Entypo
          name={isAccordionOpen ? "chevron-small-up" : "chevron-small-down"}
          size={24}
          color={Colors.light.primary}
        />
      </TouchableOpacity>

      {isAccordionOpen && (
        <View style={styles.accordionContent}>
          <Text style={{ color: "white" }}>
            This is the accordion content where you can add more information
            about the exercise profile.
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.accordion_container}>
          <Image
            source={require("@/assets/images/strength.png")}
            style={styles.icon}
          />
          <Text style={styles.accordionTitle}>Targeted Muscle</Text>
        </View>
        <MaterialCommunityIcons
          name="eye-outline"
          size={24}
          color={Colors.light.primary}
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modal_container}>
            <Image
              source={require("@/assets/images/chest-view.png")}
              style={styles.modal_image}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Entypo name="cross" size={24} color={Colors.light.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Overview" && styles.activeTab]}
          onPress={() => setActiveTab("Overview")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Overview" && styles.activeTabText,
            ]}
          >
            Overview
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Instructions" && styles.activeTab]}
          onPress={() => setActiveTab("Instructions")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Instructions" && styles.activeTabText,
            ]}
          >
            Instructions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Tips" && styles.activeTab]}
          onPress={() => setActiveTab("Tips")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Tips" && styles.activeTabText,
            ]}
          >
            Tips
          </Text>
        </TouchableOpacity>
      </View>

      {renderTabContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingTop: 35,
    paddingHorizontal: 20,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  accordion_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  video: {
    marginTop: 10,
    width: "100%",
    height: 210,
  },

  controlsContainer: {
    padding: 10,
  },

  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  accordionTitle: {
    fontSize: 18,
    marginLeft: 18,
    color: "white",
  },
  accordionContent: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#262626",
    borderRadius: 8,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal_container: {
    backgroundColor: "#262626",
    borderRadius: 17,
    padding: 20,
    height: screenHeight * 0.6,
    width: screenWidth * 0.8,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 50,
    padding: 5,
  },
  modal_image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    objectFit: "contain",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Distribute tabs evenly
    width: "100%", // Make the container full width
  },
  tab: {
    flex: 1, // Make each tab take equal space
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: Colors.light.primary, // Set primary color for all tab borders
    alignItems: "center", // Center align the text
    marginTop: 10,
  },
  activeTab: {
    backgroundColor: Colors.light.primary, // Active tab background color
  },
  activeTabText: {
    color: "black", // Active tab text color
  },
  tabText: {
    gap: 10,
    fontSize: 16,
    color: "white",
  },
  tabContent: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
});

export default exerciseDetails;
