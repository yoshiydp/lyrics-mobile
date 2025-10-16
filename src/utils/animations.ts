import { Animated } from 'react-native';

export const runBounce = (anim: Animated.Value, delay: number = 0) => {
  return Animated.sequence([
    Animated.timing(anim, {
      toValue: 0.9,
      duration: 80,
      delay,
      useNativeDriver: true,
    }),
    Animated.spring(anim, {
      toValue: 1.1,
      friction: 3,
      delay,
      useNativeDriver: true,
    }),
  ]);
};
