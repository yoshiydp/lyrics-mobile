import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 20,
    paddingTop: 150,
  },
  formControlContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 16,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  border: {
    width: 48,
    height: 1,
    marginVertical: 32,
    marginHorizontal: 'auto',
    backgroundColor: COLORS.base.borderDefault,
  },
  logoutButton: {
    width: 240,
    marginHorizontal: 'auto',
    marginBottom: 32,
  },
});
