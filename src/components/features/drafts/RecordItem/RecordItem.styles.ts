import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 66,
    paddingVertical: 14,
    paddingRight: 12,
    paddingLeft: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.accent.purple,
    borderRadius: 4,
    backgroundColor: COLORS.base.bgOverlay,
  },
  infoWrapper: {
    width: '92%',
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    maxWidth: '55%',
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
    marginRight: 20,
  },
  updatedAt: {
    color: COLORS.font.default,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 12,
  },
  arrowIcon: {
    marginLeft: 'auto',
    color: COLORS.accent.purple,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: -10,
    left: 6,
    color: COLORS.accent.goldPrimary,
  },
});
