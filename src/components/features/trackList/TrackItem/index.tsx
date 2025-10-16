import {
  Animated,
  Pressable,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import Icon from '@/components/ui/Icon';
import { useAnimatedSequence } from '@/hooks/useAnimatedSequence';
import ExtensionLabel from '@/components/ui/ExtensionLabel';
import type {
  FontAwesomeIconName,
  FontAwesome6IconName,
} from '@/types/iconTypes';
import styles from './TrackItem.styles';

interface Props {
  title: string;
  linkedProjects: string[];
  extention: string;
  updatedAt: Date;
  onPress: (event: GestureResponderEvent) => void;
  index?: number;
  startAnimation?: boolean;
}

export default function TrackItem({
  title,
  linkedProjects,
  extention,
  updatedAt,
  onPress,
  index = 0,
  startAnimation = false,
}: Props) {
  const anim = useAnimatedSequence({
    start: startAnimation,
    fromX: 50,
    index,
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateX: anim.translateX }],
        opacity: anim.opacity,
      }}
    >
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoBox}>
          <View style={styles.fileDetailBox}>
            {linkedProjects && linkedProjects.length > 0 && (
              <Icon
                component={FontAwesome6}
                name={'link' as FontAwesome6IconName}
                size={18}
                style={styles.linkIcon}
              />
            )}
            <View style={styles.extentionBox}>
              <ExtensionLabel label={extention} />
            </View>
          </View>
          <Text style={styles.updatedAt}>
            {updatedAt.toLocaleDateString()} UPLOAD
          </Text>
        </View>
        <Icon
          component={FontAwesome}
          name={'angle-right' as FontAwesomeIconName}
          size={30}
          style={styles.arrowIcon}
        />
      </Pressable>
    </Animated.View>
  );
}
