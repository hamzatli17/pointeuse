import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useAppUpdate} from '../contexts/app.context';

export default function SignInScreen() {
  const updateApp = useAppUpdate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function signIn() {
    // make signin requeste here
    const token = '';
    const user = {};
    updateApp({token, user});
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>sign in screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
