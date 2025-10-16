import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 1,
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: '50%',
    backgroundColor: COLORS.accent.purple,
  },
  labeledContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    borderRadius: 50,
  },
  label: {
    color: COLORS.form.default.text,
    fontFamily: 'NotoSans_400Regular',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 700,
    marginRight: 6,
  },
  icon: {
    color: COLORS.icon.navigation,
  },
});
