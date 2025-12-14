import '../global.css';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import { ThemeProvider } from '~/lib/stores/themeStore';
import { queryClient } from '~/lib/services/queryClient';
import { initializeSentry } from '~/lib/services/sentry';

// Ignore SafeAreaView deprecation warning (comes from react-native-web, not our code)
LogBox.ignoreLogs(['SafeAreaView has been deprecated']);

export const unstable_settings = {
  // Start with index which redirects to login
  initialRouteName: 'index',
};

export default function RootLayout() {
  useEffect(() => {
    initializeSentry();
  }, []);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
