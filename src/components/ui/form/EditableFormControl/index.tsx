import { View, Text, TextInput } from 'react-native';
import { FC, useState } from 'react';
import { SvgProps } from 'react-native-svg';
import ProfileEditSocialAccountList from '@/components/ui/socialAccount/ProfileEditSocialAccountList';
import styles from './EditableFormControl.styles';

interface SocialAccount {
  icon: FC<SvgProps>;
  username: string;
  isLinked: boolean;
}

interface Props {
  label?: string;
  formValue?: string;
  placeholder?: string;
  showSocialAccounts?: boolean;
  socialAccounts?: SocialAccount[] | undefined;
  onChangeText?: (text: string) => void;
  onPressRemoveLink?: (index: number) => void;
  onPressLinkAccount?: (index: number) => void;
}

export default function EditableFormControl({
  label,
  formValue = '',
  placeholder = '',
  showSocialAccounts,
  socialAccounts,
  onChangeText,
  onPressRemoveLink,
  onPressLinkAccount,
}: Props) {
  const [value, setValue] = useState(formValue);

  const handleChangeText = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {showSocialAccounts && socialAccounts ? (
        <View style={styles.socialAccountContainer}>
          <ProfileEditSocialAccountList
            socialAccounts={socialAccounts}
            onPressRemoveLink={onPressRemoveLink}
            onPressLinkAccount={onPressLinkAccount}
          />
        </View>
      ) : (
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
        />
      )}
    </View>
  );
}
