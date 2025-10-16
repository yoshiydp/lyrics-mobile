import { View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import RippleButton from '../buttons/RippleButton';
import LinkedProjectsButtonWithMenu from '@/components/features/audioPlayer/LinkedProjectsButtonWithMenu';
import ActionButtonWithMenu from '@/components/ui/ActionButtonWithMenu';
import Icon from '@/components/ui/Icon';
import type { HeaderToolBarButton } from '@/constants/headerToolBarButtons';
import styles from './HeaderToolBar.styles';

interface HeaderToolBarProps {
  items: HeaderToolBarButton[];
  isBookmarked?: boolean;
}

export default function HeaderToolBar({
  items,
  isBookmarked = false,
}: HeaderToolBarProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (menuId: string) => {
    setOpenMenuId((prev) => (prev === menuId ? null : menuId));
  };

  const leftItems = items.filter((item) => item.type === 'back');

  const centerItem = items.find(
    (item) => item.type === 'headerTitle' || item.type === 'linkedProjects',
  );

  const rightItems = items.filter(
    (item) =>
      item.type === 'bookmark' ||
      item.type === 'navigationListScreen' ||
      item.type === 'action' ||
      item.type === 'hamburger' ||
      item.type === 'buttonGroup',
  );

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {leftItems.map((item) => (
          <Pressable key={item.id} style={styles.button} onPress={item.onPress}>
            <Icon
              component={FontAwesome}
              name="angle-left"
              size={40}
              style={[styles.defaultColor, styles.iconAngleLeft]}
            />
          </Pressable>
        ))}
      </View>

      <View style={styles.center}>
        {centerItem?.type === 'headerTitle' && (
          <Text style={styles.headerTitle}>{centerItem.headerTitle}</Text>
        )}
        {centerItem?.type === 'linkedProjects' &&
          centerItem.projectItems &&
          centerItem.projectItems.length > 0 && (
            <LinkedProjectsButtonWithMenu
              key={centerItem.id}
              projectItems={centerItem.projectItems}
              isOpen={openMenuId === centerItem.id}
              onToggle={() => toggleMenu(centerItem.id)}
            />
          )}
      </View>

      <View style={styles.right}>
        {rightItems.map((item) => {
          if (item.type === 'buttonGroup' && item.buttons) {
            return (
              <View key={item.id} style={styles.buttonGroup}>
                {item.buttons.map((btn) => {
                  switch (btn.type) {
                    case 'bookmark':
                      return (
                        <Pressable
                          key={btn.id}
                          style={styles.button}
                          onPress={btn.onPress}
                        >
                          <Icon
                            component={FontAwesome}
                            name={isBookmarked ? 'bookmark' : 'bookmark-o'}
                            size={30}
                            style={[
                              styles.defaultColor,
                              isBookmarked && styles.primaryColor,
                            ]}
                          />
                        </Pressable>
                      );

                    case 'delete':
                      return (
                        <Pressable
                          key={btn.id}
                          style={styles.button}
                          onPress={btn.onPress}
                        >
                          <Icon
                            component={FontAwesome}
                            name="trash-o"
                            size={28}
                            style={styles.defaultColor}
                          />
                        </Pressable>
                      );

                    case 'navigationListScreen':
                      return (
                        <Pressable
                          key={btn.id}
                          style={styles.button}
                          onPress={btn.onPress}
                        >
                          <Icon
                            component={FontAwesome}
                            name="list-ul"
                            size={24}
                            style={styles.defaultColor}
                          />
                        </Pressable>
                      );

                    case 'action':
                      return (
                        <ActionButtonWithMenu
                          key={btn.id}
                          menuItems={btn.menuItems || []}
                          isOpen={openMenuId === btn.id}
                          onToggle={() => toggleMenu(btn.id)}
                        />
                      );

                    default:
                      return (
                        <Pressable
                          key={btn.id}
                          style={styles.button}
                          onPress={btn.onPress}
                        >
                          <Text style={styles.defaultColor}>{btn.type}</Text>
                        </Pressable>
                      );
                  }
                })}
              </View>
            );
          }

          switch (item.type) {
            case 'bookmark':
              return (
                <Pressable
                  key={item.id}
                  style={styles.button}
                  onPress={item.onPress}
                >
                  <Icon
                    component={FontAwesome}
                    name={isBookmarked ? 'bookmark' : 'bookmark-o'}
                    size={30}
                    style={[
                      styles.defaultColor,
                      isBookmarked && styles.primaryColor,
                    ]}
                  />
                </Pressable>
              );

            case 'navigationListScreen':
              return (
                <Pressable
                  key={item.id}
                  style={styles.button}
                  onPress={item.onPress}
                >
                  <Icon
                    component={FontAwesome}
                    name="list-ul"
                    size={24}
                    style={styles.defaultColor}
                  />
                </Pressable>
              );

            case 'action':
              return (
                <ActionButtonWithMenu
                  key={item.id}
                  menuItems={item.menuItems || []}
                  isOpen={openMenuId === item.id}
                  onToggle={() => toggleMenu(item.id)}
                />
              );

            case 'hamburger':
              return (
                <RippleButton key={item.id} onPress={item.onPress} size={52}>
                  <Icon
                    component={FontAwesome}
                    name="bars"
                    size={26}
                    style={styles.defaultColor}
                  />
                </RippleButton>
              );
          }
        })}
      </View>
    </View>
  );
}
