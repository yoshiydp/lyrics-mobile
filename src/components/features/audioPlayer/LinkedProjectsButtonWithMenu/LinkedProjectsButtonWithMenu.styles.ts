import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  primaryColor: {
    color: COLORS.accent.goldPrimary,
  },
  menuContainer: {
    position: 'absolute',
    top: 60,
    maxWidth: 300,
    backgroundColor: COLORS.accent.goldPrimary,
    borderRadius: 4,
    padding: 8,
    elevation: 6,
    zIndex: 100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  triangle: {
    position: 'absolute',
    top: -10,
    left: '50%',
    marginLeft: -3,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.accent.goldPrimary,
  },
  menuLabel: {
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
  },
  text: {
    color: COLORS.font.label,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    flexShrink: 1,
  },
  projectList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
