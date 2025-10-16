import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OverlayScreenTemplate from '@/components/features/overlay/OverlayScreenTemplate';
import ProfileIcon from '@/components/features/profile/ProfileIcon';
import EditableFormControl from '@/components/ui/form/EditableFormControl';
import SubmitButton from '@/components/ui/buttons/SubmitButton';
import { useModal } from '@/contexts/ModalContext';
import { PROFILE_DATA } from '@/data/profileData';
import { MODAL_MESSAGES } from '@/constants/messages';
import styles from './ProjectSettingsScreen.styles';

export default function ProjectSettingsScreen() {
  const SOCIAL_SERVICES = ['X', 'Instagram', 'Google'];
  const navigation = useNavigation();
  const { showConfirmModal, showLoading, hideLoading, closeModal } = useModal();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSaveProfile = () => {
    showLoading();

    setTimeout(() => {
      hideLoading();
      handleGoBack();
    }, 3000);
  };

  const onSubmitRemoveLink = () => {
    closeModal();
    showLoading();

    setTimeout(() => {
      hideLoading();
      closeModal();
    }, 3000);
  };

  const onPressRemoveLink = (index: number) => {
    const service = SOCIAL_SERVICES[index] ?? 'SNS';

    showConfirmModal({
      message: MODAL_MESSAGES.confirmRemoveLink.message(service),
      description: MODAL_MESSAGES.confirmRemoveLink.description,
      submitButton: {
        label: MODAL_MESSAGES.confirmRemoveLink.submitButtonLabel,
        onPress: onSubmitRemoveLink,
      },
    });
  };

  const onPressLinkAccount = (index: number) => {
    switch (index) {
      case 0:
        return console.log('Link X account');
      case 1:
        return console.log('Link Instagram account');
      case 2:
        return console.log('Link Google account');
      default:
        break;
    }
  };

  return (
    <OverlayScreenTemplate>
      <ScrollView style={styles.container}>
        <ProfileIcon thumbnail={PROFILE_DATA.thumbnail} editable />
        <View style={styles.formControlContainer}>
          <EditableFormControl
            label="User Name"
            formValue={PROFILE_DATA.username}
          />
          <EditableFormControl label="Email" formValue={PROFILE_DATA.email} />
          <SubmitButton
            containerClassName={styles.saveButton}
            onPress={onSaveProfile}
          />
          <EditableFormControl
            label="Link Social Accounts"
            showSocialAccounts
            socialAccounts={PROFILE_DATA.socialAccounts}
            onPressRemoveLink={onPressRemoveLink}
            onPressLinkAccount={onPressLinkAccount}
          />
        </View>
      </ScrollView>
    </OverlayScreenTemplate>
  );
}
