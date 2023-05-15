import React from "react";

import { StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./src/Screens/TabScreens/MainScreen";
import PromotionsScreen from "./src/Screens/TabScreens/PromotionsScreen";
import MapScreen from "./src/Screens/TabScreens/MapScreen";
import ProfileScreen from "./src/Screens/TabScreens/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

export const useRoute = () => {
  //   if (!isAuth) {
  //     return (
  //       <AuthStack.Navigator>
  //         <AuthStack.Screen
  //           options={{ headerShown: false }}
  //           name="Login"
  //           component={LoginScreen}
  //         />
  //         <AuthStack.Screen
  //           options={{ headerShown: false }}
  //           name="Register"
  //           component={RegistrationScreen}
  //         />
  //       </AuthStack.Navigator>
  //     );
  //   }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#757575",
        tabBarActiveTintColor: "#471CA9",
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.btn}>
              <Ionicons name="home" size={24} color={color} />
            </View>
          ),
          tabBarLabelStyle: {
            paddingBottom: 5,
          },
        }}
        name="Main"
        component={MainScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.btn}>
              <Fontisto name="shopping-sale" size={24} color={color} />
            </View>
          ),
          tabBarLabelStyle: {
            paddingBottom: 5,
          },
        }}
        name="Promotions"
        component={PromotionsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.btn}>
              <FontAwesome5 name="map-marked-alt" size={24} color={color} />
            </View>
          ),
          tabBarLabelStyle: {
            paddingBottom: 5,
          },
        }}
        name="Map"
        component={MapScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.btn}>
              <FontAwesome name="user" size={24} color={color} />
            </View>
          ),
          tabBarLabelStyle: {
            paddingBottom: 5,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: -10,
  },
});
