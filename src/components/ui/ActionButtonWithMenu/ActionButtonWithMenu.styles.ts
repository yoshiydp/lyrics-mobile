import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  defaultColor: {
    color: COLORS.icon.default,
  },
  menuContainer: {
    position: 'absolute',
    top: 56,
    right: 0,
    minWidth: 150,
    backgroundColor: COLORS.navigation.bg,
    borderRadius: 6,
    paddingHorizontal: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    zIndex: 100,
  },
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.base.borderDefault,
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuLabel: {
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 21,
  },
  menuLabelLast: {
    color: COLORS.action.record,
  },
});
