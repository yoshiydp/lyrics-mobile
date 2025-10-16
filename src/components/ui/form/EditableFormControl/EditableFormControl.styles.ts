import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: COLORS.form.default.text,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  textInput: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginTop: 6,
    borderRadius: 8,
    color: COLORS.form.search.default,
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: COLORS.form.overlay.background,
  },
  formValue: {
    paddingHorizontal: 12,
    marginTop: 12,
    color: COLORS.form.default.text,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 600,
  },
  socialAccountContainer: {
    marginTop: 16,
    paddingHorizontal: 10,
  },
});
