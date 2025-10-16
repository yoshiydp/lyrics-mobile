import { Text } from 'react-native';
import styles from './ExtentionLabel.styles';

interface Props {
  label: string;
}

export default function ExtensionLabel({ label }: Props) {
  return <Text style={styles.container}>{label}</Text>;
}
