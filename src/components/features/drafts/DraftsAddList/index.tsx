import { View, Animated } from 'react-native';
import DraftsAddItem from '@/components/features/drafts/DraftsAddItem';
import { useAnimatedSequence } from '@/hooks/useAnimatedSequence';
import styles from './DraftsAddList.styles';

interface AddItem {
  addButtonLabel: string;
  listButtonLabel: string;
  onPressAddButton: () => void;
  onPressListButton: () => void;
}

interface Props {
  addItems: AddItem[];
  startAnimation: boolean;
}

export default function DraftsAddList({ addItems, startAnimation }: Props) {
  return (
    <View style={styles.container}>
      {addItems.map((item, index) => {
        // 各アイテムのアニメーションを hooks で管理
        const { translateX, opacity } = useAnimatedSequence({
          start: startAnimation,
          index,
          fromX: 50, // 右からスライド
          duration: 400,
          delayStep: 70, // 各アイテムの遅延
        });

        // translateX / opacity の安全な値を保証
        const safeTranslateX = translateX ?? new Animated.Value(0);
        const safeOpacity = opacity ?? new Animated.Value(1);

        return (
          <DraftsAddItem
            key={index}
            {...item}
            translateX={safeTranslateX}
            opacity={safeOpacity}
          />
        );
      })}
    </View>
  );
}
