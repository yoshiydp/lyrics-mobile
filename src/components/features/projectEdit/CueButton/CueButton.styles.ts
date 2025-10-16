import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingVertical: 11,
    borderRadius: 2,
    backgroundColor: COLORS.accent.purple,
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
  text: {
    fontFamily: 'BebasNeue',
    color: COLORS.font.navigation,
  },
  label: {
    fontSize: 20,
    lineHeight: 20,
  },
  time: {
    marginTop: 4,
    fontSize: 16,
    lineHeight: 16,
  },
});
