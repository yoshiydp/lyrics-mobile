import { View, Image, Pressable, ImageSourcePropType } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Icon from '@/components/ui/Icon';
import type { FontAwesome6IconName } from '@/types/iconTypes';
import styles from './ProfileIcon.styles';

interface Props {
  thumbnail: ImageSourcePropType;
  editable?: boolean;
}

export default function ProfileIcon({ thumbnail, editable = false }: Props) {
  const handleUploadOnPress = () => {
    console.log('Upload button pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={thumbnail} style={styles.thumbnail} />
      {editable && (
        <Pressable style={styles.uploadButton} onPress={handleUploadOnPress}>
          <Icon
            component={FontAwesome6}
            name={'upload' as FontAwesome6IconName}
            size={18}
            style={styles.uploadButtonIcon}
          />
        </Pressable>
      )}
    </View>
  );
}
