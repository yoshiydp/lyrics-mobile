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
    paddingTop: 10,
    paddingBottom: 20,
  },
  titleInputWrapper: {
    marginHorizontal: 20,
  },
  seekBarWrapper: {
    marginTop: 60,
  },
  playerControlsWrapper: {
    marginTop: 16,
  },
  repeatButtonPosition: {
    position: 'static',
  },
  volumeSliderWrapper: {
    marginTop: 28,
  },
  submitButton: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
