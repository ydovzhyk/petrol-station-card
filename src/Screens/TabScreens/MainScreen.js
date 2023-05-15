import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreen from "../NestedScreens/DefaultScreen";
import MenuScreen from "../NestedScreens/MenuScreen";
import RegistrationScreen from "../NestedScreens/RegistrationScreen";

const NestedScreen = createStackNavigator();

const MainScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        lazyLoad: true,
        tabBarStyle: {
          borderTopWidth: 1,
          position: "absolute",
          height: 60,
        },
      }}
    >
      <NestedScreen.Screen name="DefaultScreen" component={DefaultScreen} />
      <NestedScreen.Screen name="MenuScreen" component={MenuScreen} />
      <NestedScreen.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
    </NestedScreen.Navigator>
  );
};

export default MainScreen;
