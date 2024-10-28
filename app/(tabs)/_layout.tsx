import { Tabs } from "expo-router";
import React from "react";
import { Image, Text } from "react-native"; // Make sure Text is imported from react-native

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.light.secondary,
          height: 69,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/home_icon_active.png")
                  : require("@/assets/images/home_icon_inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
                fontWeight: focused ? "bold" : "normal",
                color: focused ? Colors.light.primary : "gray",
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/discover_icon_active.png")
                  : require("@/assets/images/discover_icon_inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
                fontWeight: focused ? "bold" : "normal",
                color: focused ? Colors.light.primary : "gray",
              }}
            >
              Discover
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/insights_icon_active.png")
                  : require("@/assets/images/insights_icon_inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
                fontWeight: focused ? "bold" : "normal",
                color: focused ? Colors.light.primary : "gray",
              }}
            >
              Insights
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/images/profile_icon_active.png")
                  : require("@/assets/images/profile_icon_inactive.png")
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                marginBottom: 10,
                fontWeight: focused ? "bold" : "normal",
                color: focused ? Colors.light.primary : "gray",
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
