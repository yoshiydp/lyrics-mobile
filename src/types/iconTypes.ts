import type { ComponentProps } from 'react';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

export type FontAwesomeIconName = ComponentProps<typeof FontAwesome>['name'];
export type FontAwesome6IconName = ComponentProps<typeof FontAwesome6>['name'];
export type OcticonsIconName = ComponentProps<typeof Octicons>['name'];
export type IoniconsIconName = ComponentProps<typeof Ionicons>['name'];

export type AnyIconName =
  | FontAwesomeIconName
  | FontAwesome6IconName
  | OcticonsIconName
  | IoniconsIconName;
