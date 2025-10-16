import { SCREENS, type ScreenName } from '@/constants/screens';
import type { FontAwesomeIconName } from '@/types/iconTypes';

export interface NavigationMenuItem {
  icon: FontAwesomeIconName;
  label: string;
  route: ScreenName;
}

export const NAVIGATION_ITEMS: NavigationMenuItem[] = [
  { icon: 'list-ul', label: 'PROJECT LIST', route: SCREENS.PROJECT_LIST },
  { icon: 'music', label: 'TRACK LIST', route: SCREENS.TRACK_LIST },
  { icon: 'user', label: 'PROFILE', route: SCREENS.PROFILE },
  { icon: 'microphone', label: 'DRAFTS', route: SCREENS.DRAFTS },
];
