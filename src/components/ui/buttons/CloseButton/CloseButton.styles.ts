import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: '-50%' }],
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: COLORS.navigation.bg,
  },
  icon: {
    color: COLORS.accent.purple,
  },
});
