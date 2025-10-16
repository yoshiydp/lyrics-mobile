import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.form.default.border,
    paddingVertical: 14,
    color: COLORS.form.default.text,
    fontSize: 18,
    fontWeight: 600,
  },
});
