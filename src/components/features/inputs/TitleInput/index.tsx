import { TextInput } from 'react-native';
import { PLACEHOLDERS } from '@/constants/placeholders';
import { styles } from './TitleInput.styles';
import { COLORS } from '@/globalStyles';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export default function TitleInput({ value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={PLACEHOLDERS.titleInput}
      placeholderTextColor={COLORS.form.placeholder}
    />
  );
}
