import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded ,SignedIn, SignedOut } from "@clerk/clerk-expo"
import { Text } from 'react-native';
import LoginPage from './../components/LoginPage'

export default function RootLayout() {
  useFonts(
    {
      'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
      'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
      'outfit-medium':require('./../assets/fonts/Outfit-Regular.ttf')
    }
  )
  return (
    <>
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="(tabs)"/>
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginPage/>
      </SignedOut>
    </ClerkProvider>
    </>

  );
}
