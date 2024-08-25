/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/signin.screen';
import SignUpScreen from '../screens/signup.screen';
import WelcomeScreen from '../screens/welcome.screen';
import {useAppContext} from '../contexts/app.context';
import ScreenContainer from '../components/utils/screenContainer';
import BottomNavigation from './bottom.navigation';
import Header from '../components/utils/header';
import appColors from '../colors';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  const {appInfos} = useAppContext();
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
          statusBarColor: appColors.screenBackground,
          statusBarStyle: Platform.OS == 'android' ? 'dark' : undefined,
          animation: 'slide_from_right',
        }}>
        {appInfos.token ? (
          <>
            <Stack.Screen options={{headerShown: false}} name="homenavs" component={BottomNavigation} />
          </>
        ) : (
          <>
            <Stack.Screen name="welcome" component={ScreenContainer(WelcomeScreen)} />
            <Stack.Screen name="signin" component={ScreenContainer(SignInScreen)} />
            <Stack.Screen name="signup" component={ScreenContainer(SignUpScreen)} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
}
