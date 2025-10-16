import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import HomeTabsNavigator from './HomeTabsNavigator';
import DefaultLayout from '@/layouts/DefaultLayout';
import ProjectEditScreen from '@/screens/ProjectEditScreen';
import ProjectSettingsScreen from '@/screens/ProjectSettingsScreen';
import AudioPlayerScreen from '@/screens/AudioPlayerScreen';
import ProfileEditScreen from '@/screens/ProfileEditScreen';
import QuickMemoScreen from '@/screens/QuickMemoScreen';
import MemoListScreen from '@/screens/MemoListScreen';
import QuickRecordScreen from '@/screens/QuickRecordScreen';
import RecordPlayerScreen from '@/screens/RecordPlayerScreen';
import RecordListScreen from '@/screens/RecordListScreen';
import OverlayDefaultLayout from '@/layouts/OverlayDefaultLayout';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <DefaultLayout>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="HomeTabs" component={HomeTabsNavigator} />

        <Stack.Screen
          name="ProjectEdit"
          component={ProjectEditScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="AudioPlayer"
          component={AudioPlayerScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="QuickMemo"
          component={QuickMemoScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="MemoList"
          component={MemoListScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="QuickRecord"
          component={QuickRecordScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="RecordPlayer"
          component={RecordPlayerScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="RecordList"
          component={RecordListScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="ProfileEdit"
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.out(Easing.exp) },
              },
              close: {
                animation: 'timing',
                config: { duration: 400, easing: Easing.inOut(Easing.ease) },
              },
            },
          }}
        >
          {() => (
            <OverlayDefaultLayout>
              <ProfileEditScreen />
            </OverlayDefaultLayout>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="ProjectSettings"
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            transitionSpec: {
              open: {
                animation: 'timing',
                config: { duration: 500, easing: Easing.out(Easing.exp) },
              },
              close: {
                animation: 'timing',
                config: { duration: 400, easing: Easing.inOut(Easing.ease) },
              },
            },
          }}
        >
          {() => (
            <OverlayDefaultLayout>
              <ProjectSettingsScreen />
            </OverlayDefaultLayout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </DefaultLayout>
  );
}
