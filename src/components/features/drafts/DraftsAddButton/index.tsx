import { Pressable, Text } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import Icon from '@/components/ui/Icon';
import styles from './DraftsAddButton.styles';

interface Props {
  label: string;
  onPress: () => void;
}

export default function DraftsAddButton({ label, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Icon component={Octicons} name="plus" size={35} style={styles.icon} />
    </Pressable>
  );
}
