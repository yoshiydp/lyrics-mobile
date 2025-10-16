import { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderToolBar from '@/components/ui/HeaderToolBar';
import MemoItem from '@/components/features/drafts/MemoItem';
import {
  HEADER_TOOLBAR_TEMPLATES,
  HeaderToolBarButton,
} from '@/constants/headerToolBarButtons';
import { MEMO_DATA } from '@/data/memoData';
import styles from './MemoListScreen.styles';

export default function MemoListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = (route as any).params || {};

  const sortedMemos = [...MEMO_DATA].sort((a, b) => {
    if (a.isBookmarked !== b.isBookmarked) {
      return a.isBookmarked ? -1 : 1;
    }
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
    { ...HEADER_TOOLBAR_TEMPLATES.headerTitle, headerTitle: 'MEMO LIST' },
  ];

  useEffect(() => {
    console.log('MemoList params', params);
  }, [params]);

  return (
    <View style={styles.container}>
      <HeaderToolBar items={items} />
      <ScrollView style={styles.listContainer}>
        {sortedMemos.map((memo) => (
          <MemoItem
            key={memo.id}
            title={memo.title}
            updatedAt={new Date(memo.updatedAt)}
            body={memo.body}
            isBookmarked={memo.isBookmarked}
            onPress={() =>
              navigation.navigate('QuickMemo', {
                id: memo.id,
                title: memo.title,
                body: memo.body,
                isBookmarked: memo.isBookmarked,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
