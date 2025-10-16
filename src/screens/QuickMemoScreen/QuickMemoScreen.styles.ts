import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.base.bgDefault,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  bodyInputWrapper: {
    marginTop: 24,
  },
  submitButton: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
