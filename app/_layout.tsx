import { View, Text } from 'react-native'
import { useFonts } from 'expo-font'
import { Slot, SplashScreen } from 'expo-router'

import '../global.css'
import { useEffect } from 'react'


const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;


  return <Slot />
}

export default RootLayout