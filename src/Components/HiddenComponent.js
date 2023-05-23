import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

const HiddenComponent = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useState(new Animated.Value(0))[0];

  const handlePress = () => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(true));
    }
  };

  const animatedStyle = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["13%", "100%"],
    }),
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.hiddenContent, animatedStyle]}>
        {/* Вміст, який може бути хований та розгортатися */}
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <View style={styles.btnGroup}>
          <Text style={styles.btnText}>Click to get a personal card</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnRegister}
            onPress={() => navigation.navigate("RegistrationScreen")}
          >
            <View style={styles.btnPointer}>
              <EvilIcons name="pointer" size={30} color="#471CA9" />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  hiddenContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    color: "#471CA9",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnPointer: {
    marginLeft: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#EBD8FF",
  },
});

export default HiddenComponent;
