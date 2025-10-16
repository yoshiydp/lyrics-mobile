import { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderToolBar from '@/components/ui/HeaderToolBar';
import RecordItem from '@/components/features/drafts/RecordItem';
import {
  HEADER_TOOLBAR_TEMPLATES,
  HeaderToolBarButton,
} from '@/constants/headerToolBarButtons';
import { RECORD_DATA } from '@/data/recordData';
import styles from './RecordListScreen.styles';

export default function RecordListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = (route as any).params || {};

  const sortedRecords = [...RECORD_DATA].sort((a, b) => {
    // 1. isBookmarked で優先度をつける
    if (a.isBookmarked !== b.isBookmarked) {
      return a.isBookmarked ? -1 : 1; // true を前に
    }
    // 2. updatedAt 降順
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  const handleGoBack = () => {
    console.log('params', params);
    if (params.source === 'Drafts') {
      navigation.navigate('HomeTabs', { screen: params.source });
    } else {
      navigation.goBack();
    }
  };

  const items: HeaderToolBarButton[] = [
    { ...HEADER_TOOLBAR_TEMPLATES.back, onPress: handleGoBack },
    { ...HEADER_TOOLBAR_TEMPLATES.headerTitle, headerTitle: 'RECORD LIST' },
  ];

  useEffect(() => {
    console.log('RecordList params', params);
  }, [params]);

  return (
    <View style={styles.container}>
      <HeaderToolBar items={items} />
      <ScrollView style={styles.listContainer}>
        {sortedRecords.map((record) => (
          <RecordItem
            key={record.id}
            title={record.title}
            updatedAt={new Date(record.updatedAt)}
            body={record.body}
            isBookmarked={record.isBookmarked}
            onPress={() => {
              console.log('RecordItem pressed', record);
              navigation.navigate('RecordPlayer', {
                recordedFile: record.source,
                recordedDuration: record.duration,
                title: record.title,
                isBookmarked: record.isBookmarked,
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
