import { useEffect, useState, useCallback } from 'react';
import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';
import { DefaultService } from '@/apiClient/services/DefaultService';
import { SOCIAL_ICON_MAP } from '@/constants/socialIconMap';

export interface SocialAccount {
  icon: FC<SvgProps>;
  username: string;
  isLinked: boolean;
}

export interface ProfileType {
  username: string;
  email: string;
  thumbnail: { uri: string };
  socialAccounts?: SocialAccount[];
}

export function useFetchProfile() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await DefaultService.getProfile();

      setProfile({
        ...res,
        thumbnail: { uri: res.thumbnail },
        socialAccounts: res.socialAccounts?.map(
          (acc: {
            provider: keyof typeof SOCIAL_ICON_MAP;
            username: string;
            isLinked: boolean;
          }) => ({
            icon: SOCIAL_ICON_MAP[acc.provider],
            username: acc.username,
            isLinked: acc.isLinked,
          }),
        ),
      });
    } catch (err) {
      console.error('Failed to fetch profile:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, error, refreshProfile: fetchProfile };
}
