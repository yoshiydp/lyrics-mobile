import { Pressable, View, Text, Animated } from 'react-native';
import { useRef } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Icon from '@/components/ui/Icon';
import { runBounce } from '@/utils/animations';
import styles from './RecReadySection.styles';

interface RecReadySectionProps {
  onPressStartRecording: () => void;
}

export default function RecReadySection({
  onPressStartRecording,
}: RecReadySectionProps) {
  const outerScale = useRef(new Animated.Value(1)).current;
  const innerScale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    onPressStartRecording();

    Animated.parallel([
      runBounce(outerScale),
      runBounce(innerScale, 50),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Icon
        component={FontAwesome}
        name="microphone"
        size={30}
        style={styles.microphoneIcon}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          デバイスのマイク、または外部接続のマイクに近づいてからRECボタンをタップして下さい
        </Text>
      </View>

      <Pressable style={styles.readyButton} onPress={handlePress}>
        <Animated.View
          style={[
            styles.readyButtonCircle,
            { transform: [{ scale: outerScale }] },
          ]}
        />
        <Animated.View
          style={[
            styles.readyButtonInnerCircle,
            { transform: [{ scale: innerScale }] },
          ]}
        />
      </Pressable>
    </View>
  );
}
