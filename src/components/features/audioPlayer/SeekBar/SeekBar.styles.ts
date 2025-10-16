import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  time: {
    color: COLORS.font.default,
    fontSize: 14,
    lineHeight: 21,
  },
  positionText: {
    marginLeft: 6,
  },
  durationText: {
    marginRight: 6,
  },
});
