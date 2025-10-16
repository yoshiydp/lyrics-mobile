import { StyleSheet } from 'react-native';
import { COLORS } from '@/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.base.bgDefault,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  editor: {
    minHeight: 200,
    flex: 1,
  },
  toolbar: {
    backgroundColor: COLORS.navigation.bg,
    paddingVertical: 4,
  },
  richEditor: {
    color: COLORS.form.default.text,
    fontSize: 18,
    fontWeight: 600,
    backgroundColor: COLORS.base.bgDefault,
  },
});
