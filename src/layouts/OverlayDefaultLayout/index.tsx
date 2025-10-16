import React from 'react';
import { View } from 'react-native';
import { ModalProvider } from '@/contexts/ModalContext';
import styles from './OverlayDefaultLayout.styles';

interface Props {
  children: React.ReactNode;
}

export default function OverlayDefaultLayout({ children }: Props) {
  return (
    <ModalProvider>
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
      </View>
    </ModalProvider>
  );
}
