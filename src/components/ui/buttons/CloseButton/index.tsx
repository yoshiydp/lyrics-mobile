import { Pressable, GestureResponderEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from '@/components/ui/Icon';
import type { IoniconsIconName } from '@/types/iconTypes';
import styles from './CloseButton.styles';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
}

export default function CancelButton({ onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon
        component={Ionicons}
        name={'close-sharp' as IoniconsIconName}
        size={40}
        style={styles.icon}
      />
    </Pressable>
  );
}
