import XIcon from '@/assets/icons/x-icon.svg';
import InstagramIcon from '@/assets/icons/instagram-icon.svg';
import GoogleIcon from '@/assets/icons/google-icon.svg';
import ProfileThumbnail from '@/assets/images/sample/profile.jpg';

export const PROFILE_DATA = {
  thumbnail: ProfileThumbnail,
  username: 'User Profile Name',
  email: 'contact@example.com',
  socialAccounts: [
    { icon: XIcon, username: '@user_name', isLinked: true },
    { icon: InstagramIcon, username: '@user_name', isLinked: true },
    { icon: GoogleIcon, username: 'Yoshi Watanabe', isLinked: true },
  ],
};
