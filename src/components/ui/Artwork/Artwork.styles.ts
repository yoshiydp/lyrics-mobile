import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.base.bgDefault,
  },
  artwork: {
    width: 260,
    height: 260,
    borderRadius: 4,
    marginHorizontal: 'auto',
  },
});
