import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  ripple: {
    position: 'absolute',
    backgroundColor: COLORS.button.bgRipple,
  },
});
