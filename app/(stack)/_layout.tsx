import { Stack } from "expo-router"


const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false
        headerStyle: {
          backgroundColor: 'white',
        },
        animation: 'ios_from_right',
        contentStyle: {
          backgroundColor: 'white',

        }
      }}
    >


      <Stack.Screen
        name='welcome/index'
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name='createAccount/index'
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name='customizeCreateAccount/index'
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name='dataConfirmation/index'
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name='codeVerification/index'
        options={{
          title: '',
        }}
      />

      <Stack.Screen
        name='createPassword/index'
        options={{
          title: '',
        }}
      />

    </Stack>
  )
}

export default StackLayout