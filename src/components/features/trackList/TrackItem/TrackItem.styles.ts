import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: 64,
    paddingVertical: 14,
    paddingRight: 12,
    paddingLeft: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.accent.purple,
    borderRadius: 4,
    backgroundColor: COLORS.base.bgOverlay,
  },
  title: {
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
    marginRight: 'auto',
    flexShrink: 1,
  },
  infoBox: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  fileDetailBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  extentionBox: {
    marginLeft: 8,
  },
  linkIcon: {
    color: COLORS.accent.goldPrimary,
  },
  updatedAt: {
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  arrowIcon: {
    marginLeft: 12,
    color: COLORS.accent.purple,
  },
});
