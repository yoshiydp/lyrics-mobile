import { View, Image } from 'react-native';
import styles from './Artwork.styles';

interface Props {
  artwork: any;
}

export default function AudioPlayerScreen({ artwork }: Props) {
  return (
    <View style={styles.container}>
      {artwork && <Image source={artwork} style={styles.artwork} />}
    </View>
  );
}
