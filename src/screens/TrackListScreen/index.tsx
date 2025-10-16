import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
import HomeTabsScreenTemplate from '@/components/features/home/templates/HomeTabsScreenTemplate';
import TrackItem from '@/components/features/trackList/TrackItem';
import HeaderActionButton from '@/components/ui/buttons/HeaderActionButton';
import { TRACK_DATA } from '@/data/trackData';
import { useScreenAnimation } from '@/hooks/useScreenAnimation';
import styles from './TrackListScreen.styles';

export default function TrackListScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { titleAnim1, titleAnim2, startListAnimation } = useScreenAnimation();

  const handleTrackPress = (index: number) => {
    navigation.navigate('AudioPlayer', {
      trackIndex: index,
      tracks: TRACK_DATA,
    });
  };

  return (
    <HomeTabsScreenTemplate
      title="TRACK LIST"
      titleAnim1={titleAnim1}
      titleAnim2={titleAnim2}
    >
      <HeaderActionButton
        label={<>Add{'\n'}Track</>}
        iconModule="FontAwesome6"
        icon="plus"
        iconSize={22}
        onPress={() => console.log('Add Track pressed')}
        startAnimation={startListAnimation}
      />
      <ScrollView style={styles.container}>
        {TRACK_DATA.map((track, index) => (
          <TrackItem
            key={track.id}
            index={index}
            title={track.title}
            linkedProjects={track.linkedProjects}
            extention={track.extention}
            updatedAt={new Date(track.updatedAt)}
            onPress={() => handleTrackPress(index)}
            startAnimation={startListAnimation}
          />
        ))}
      </ScrollView>
    </HomeTabsScreenTemplate>
  );
}
