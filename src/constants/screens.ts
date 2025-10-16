export const SCREENS = {
  PROJECT_LIST: 'ProjectList',
  TRACK_LIST: 'TrackList',
  PROFILE: 'Profile',
  DRAFTS: 'Drafts',
} as const;

export type ScreenName = (typeof SCREENS)[keyof typeof SCREENS];
