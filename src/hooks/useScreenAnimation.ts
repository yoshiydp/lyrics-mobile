import { useState } from 'react';
import { useAnimatedSequence } from '@/hooks/useAnimatedSequence';

/**
 * タイトルアニメーション → リストアニメーションを
 * スクリーンレベルで一括管理する共通hooks
 */
export function useScreenAnimation() {
  const [startListAnimation, setStartListAnimation] = useState(false);

  const titleAnim1 = useAnimatedSequence({
    start: true,
    fromY: 30,
    duration: 600,
  });

  const titleAnim2 = useAnimatedSequence({
    start: true,
    fromY: 30,
    duration: 600,
    delayStep: 150,
    onEnd: () => setStartListAnimation(true),
  });

  return {
    titleAnim1,
    titleAnim2,
    startListAnimation,
  };
}
