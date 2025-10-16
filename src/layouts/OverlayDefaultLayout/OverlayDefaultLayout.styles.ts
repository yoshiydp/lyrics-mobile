import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: 'NotoSans_400Regular',
    backgroundColor: COLORS.accent.purple,
  },
  content: {
    flex: 1,
  },
});
