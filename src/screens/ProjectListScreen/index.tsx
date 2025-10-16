import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import ScreenTemplate from '@/components/features/home/templates/HomeTabsScreenTemplate';
import ProjectItem from '@/components/features/projectList/ProjectItem';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
import { useScreenAnimation } from '@/hooks/useScreenAnimation';
import { PROJECT_DATA } from '@/data/projectData';
import styles from './ProjectListScreen.styles';

export default function ProjectListScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { titleAnim1, titleAnim2, startListAnimation } = useScreenAnimation();

  const handleProjectPress = (index: number) => {
    navigation.navigate('ProjectEdit', {
      id: PROJECT_DATA[index].id,
      projectName: PROJECT_DATA[index].projectName,
      artwork: PROJECT_DATA[index].artwork,
      trackName: PROJECT_DATA[index].trackName,
      trackSource: PROJECT_DATA[index].trackSource,
      waveformJson: PROJECT_DATA[index].waveformJson,
      cueButtons: PROJECT_DATA[index].cueButtons,
      tags: PROJECT_DATA[index].tags,
      updatedAt: new Date(PROJECT_DATA[index].updatedAt),
    });
  };

  useEffect(() => {
    PROJECT_DATA.sort((a, b) => {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }, []);

  return (
    <ScreenTemplate
      title="PROJECT LIST"
      titleAnim1={titleAnim1}
      titleAnim2={titleAnim2}
    >
      <ScrollView style={styles.container}>
        {PROJECT_DATA.map((project, index) => (
          <ProjectItem
            key={project.id}
            index={index}
            artwork={project.artwork}
            projectName={project.projectName}
            soundSourceName={project.trackName}
            tags={project.tags}
            updatedAt={new Date(project.updatedAt)}
            onPress={() => handleProjectPress(index)}
            startAnimation={startListAnimation}
          />
        ))}
      </ScrollView>
    </ScreenTemplate>
  );
}
