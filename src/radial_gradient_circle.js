import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

const RadialGradientCircle = ({ item }) => {
  return (
    <View style={styles.container}>
      <Svg height={item.circle} width={item.circle}>
        <Defs>
          <RadialGradient
            id={`grad-${item.circle}`} // Use a unique id for each gradient
            cx="50%" cy="50%" r="50%"
            fx="50%" fy="50%"
            gradientUnits="userSpaceOnUse"
          >
            {/* Center is darker and more opaque */}
            <Stop offset="0%" stopColor={item.color || '#000000'} stopOpacity="0.6" />
            {/* Edges are fully transparent */}
            <Stop offset="100%" stopColor={item.color || '#000000'} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        {/* Create a circle that uses the gradient */}
        <Circle cx={item.circle / 2} cy={item.circle / 2} r={item.circle / 2} fill={`url(#grad-${item.circle})`} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadialGradientCircle;
