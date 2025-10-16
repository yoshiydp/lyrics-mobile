import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  overlayBodyInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  toggleButton: {
    width: 100,
    alignItems: 'center',
    textAlign: 'center',
  },
  toggleButtonText: {
    fontFamily: 'BebasNeue',
    color: COLORS.font.navigation,
    fontSize: 20,
  },
  arrowIcon: {
    color: COLORS.font.navigation,
  },
});
