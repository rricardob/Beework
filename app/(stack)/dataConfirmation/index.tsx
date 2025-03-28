import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";

const DataConfirmationScreen = () => {
  const userData = {
    name: "Jon Doe",
    email: "jon.doe@gmail.com",
    birthDate: "15 Aug 1990",
  };

  return (
    <View className="flex-1 justify-between p-4 font-poppins-regular">
      <View className="items-center">
        {/* Avatar */}
        <View className="w-16 h-16 bg-gray-300 rounded-full mb-6" />

        {/* Título */}
        <Text className="text-2xl mb-10 font-poppins-bold text-center">
          Create your Account
        </Text>

        {/* Datos de usuario */}
        <View className="w-full space-y-4">
          {/* Nombre */}
          <View className="w-full flex-row justify-between border border-gray-300 rounded-md px-4 py-3 mb-4">
            <Text className="text-base font-poppins-regular">{userData.name}</Text>
            <Pressable>
              <Ionicons name="arrow-forward-circle-outline" size={22} color="black" />
            </Pressable>
          </View>
          {/* Email */}
          <View className="w-full flex-row justify-between border border-gray-300 rounded-md px-4 py-3 mb-4">
            <Text className="text-base font-poppins-regular">{userData.email}</Text>
            <Pressable>
              <Ionicons name="arrow-forward-circle-outline" size={22} color="black" />
            </Pressable>
          </View>
          {/* Fecha de nacimiento */}
          <View className="w-full flex-row justify-between border border-gray-300 rounded-md px-4 py-3 mb-4">
            <Text className="text-base font-poppins-regular">{userData.birthDate}</Text>
            <Pressable>
              <Ionicons name="arrow-forward-circle-outline" size={22} color="black" />
            </Pressable>
          </View>
        </View>

        {/* Política de privacidad */}
        <Text className="text-sm text-black-500 mt-10 font-poppins-regular">
          By signing up, you agree to our Terms, Privacy Policy and Cookie use.
          App may use your contact information including your email address and
          phone number for purposes outlined in our Privacy Policy. Learn more...
        </Text>
      </View>

      {/* Botón Sign Up */}
      <Pressable
        className="w-full bg-black py-3 rounded-lg items-center mt-auto"
        onPress={() => router.push("/dataConfirmation")}
      >
        <Text className="text-white font-semibold text-lg">Sign up</Text>
      </Pressable>
    </View>
  );
};

export default DataConfirmationScreen;
