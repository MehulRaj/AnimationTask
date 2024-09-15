import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import RadialGradientCircle from "./radial_gradient_circle"; // Ensure the correct path to your component
import PageContainer from "./PageContainer";

const { width } = Dimensions.get("window");
const VELOCITY = 1; // Speed of the animation

export default function Animation() {
  const isLoaded = useRef(false);

  const animatedBlurBubbles = [
    {
      circle: 500,
      position: {
        x: useSharedValue(0),
        y: useSharedValue(-250),
      },
      velocity: {
        x: useSharedValue(VELOCITY),
        y: useSharedValue(VELOCITY),
      },
      color: "#FFDF00",
    },
    {
      circle: 400,
      position: {
        x: useSharedValue(-width),
        y: useSharedValue(width + 200),
      },
      velocity: {
        x: useSharedValue(VELOCITY),
        y: useSharedValue(VELOCITY),
      },
      color: "#FFDF00",
    },
  ];

  const moveAnimation = (item) => {
    "worklet";
    const updatePosition = () => {
      if (animatedBlurBubbles.indexOf(item) !== 0) {
        item.position.x.value += item.velocity.x.value;
      } else {
        item.position.x.value -= item.velocity.x.value;
      }

      if (item.position.x.value < -item.circle) {
        item.position.x.value = width + item.circle;
      } else if (item.position.x.value > width + item.circle) {
        item.position.x.value = -item.circle;
      }

      requestAnimationFrame(updatePosition);
    };

    updatePosition();
  };

  useEffect(() => {
    if (!isLoaded.current) {
      animatedBlurBubbles.forEach((item) => {
        moveAnimation(item);
      });
      isLoaded.current = true;
    }
  }, []);

  const animatedStyle = (positionX, positionY) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: positionX.value },
          { translateY: positionY.value },
        ],
      };
    });

  return (
    <View style={styles.container}>
      {/* Green background */}
      <View style={styles.overlay} />

      <PageContainer />

      {/* Animated radial gradient circles */}
      {animatedBlurBubbles.map((item, index) => (
        <Animated.View
          key={`${item.circle}-${index}`}
          style={[
            animatedStyle(item.position.x, item.position.y),
            { position: "absolute", zIndex: 1, backgroundColor: "transparent" },
          ]}
        >
          <TouchableOpacity style={styles.touchable}>
            <RadialGradientCircle item={{ circle: item.circle, color: item.color }} />
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Ensure no background color here
  },
  touchable: {
    // Optional styles for touchable area
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#202E25", // Ensure this is the correct green background
    zIndex: -1, // Ensure this is behind everything
  },
});
