import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.base.bgDefault,
  },
  content: {
    flex: 1,
  },
  editorContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  bodyInputWrapper: {
    position: 'relative',
    marginTop: 24,
  },
  overlayBodyInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  seekBarWrapper: {
    marginTop: 8,
  },
  cueButtonListWrapper: {
    marginTop: 32,
  },
  playerControlsWrapper: {
    marginTop: 40,
  },
  volumeSliderWrapper: {
    marginTop: 24,
  },
  bottomUpButtonWrapper: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    width: '100%',
    paddingHorizontal: 16,
  },
});
