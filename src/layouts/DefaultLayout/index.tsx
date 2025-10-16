import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ModalProvider } from '@/contexts/ModalContext';
import styles from './DefaultLayout.styles';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>{children}</View>
      </SafeAreaView>
    </ModalProvider>
  );
}
