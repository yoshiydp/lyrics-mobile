import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: 90,
  },
  timeContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  time: {
    color: COLORS.font.default,
    fontSize: 14,
    lineHeight: 21,
  },
});
