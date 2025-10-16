import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
  },
  icon: {
    color: COLORS.controller.volume,
  },
});
