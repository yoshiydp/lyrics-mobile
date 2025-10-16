import { Pressable, Text } from 'react-native';
import styles from './CancelButton.styles';

interface Props {
  label?: string;
  containerClassName?: any;
  labelClassName?: any;
  onPress: () => void;
}

export default function CancelButton({
  label = 'CANCEL',
  containerClassName,
  labelClassName,
  onPress,
}: Props) {
  const containerStyle = [
    styles.container,
    containerClassName && typeof containerClassName !== 'string'
      ? containerClassName
      : null,
  ];

  const labelStyle = [
    styles.label,
    labelClassName && typeof labelClassName !== 'string'
      ? labelClassName
      : null,
  ];

  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
}
