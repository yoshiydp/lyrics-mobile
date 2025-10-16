import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 12,
    lineHeight: 18,
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accent.purple,
  },
});
