import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    marginHorizontal: 16,
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingHorizontal: 29,
    backgroundColor: COLORS.navigation.bg,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    width: 30,
    height: 3,
    borderRadius: 4,
    backgroundColor: COLORS.accent.goldPrimary,
    zIndex: 10,
  },
});
