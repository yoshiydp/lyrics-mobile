import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CloseButton from '@/components/ui/buttons/CloseButton';
import styles from './OverlayScreenTemplate.styles';

interface Props {
  children: React.ReactNode;
}

export default function OverlayScreenTemplate({ children }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {children}
      <CloseButton onPress={() => navigation.goBack()} />
    </View>
  );
}
