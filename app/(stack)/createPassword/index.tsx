import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

const CreatePasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Verifica si la contraseña tiene al menos 8 caracteres
  const isPasswordValid = password.length >= 8;

  return (
    <View className="flex-1 justify-between p-4 font-poppins-regular">
      {/* Contenedor superior */}
      <View className="items-center flex-grow">
        {/* Avatar */}
        <View className="w-16 h-16 bg-gray-300 rounded-full mb-6" />

        {/* Título */}
        <Text className="text-2xl mb-2 font-poppins-bold text-center">
          You’ll need a password
        </Text>

        {/* Subtítulo */}
        <Text className="text-base text-black-600 mb-6 mt-2 font-poppins-regular text-center">
          Make sure it’s 8 characters or above
        </Text>

        {/* Input de contraseña */}
        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-1 mb-4 font-poppins-regular">
          <TextInput
            className="flex-1 text-base font-poppins-regular"
            placeholder="Enter password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <Ionicons name="arrow-forward-circle-outline" size={24} color="gray" />
        </View>

        {/* Texto para mostrar la contraseña */}
        <Text
          className="text-base text-blue-500 font-poppins-regular text-right w-full"
          onPress={() => setShowPassword(!showPassword)}
        >
          Reveal password
        </Text>
      </View>

      {/* Contenedor inferior */}
      <View className="mb-6">
        {/* Botón Next */}
        <Pressable
          className={`w-full py-3 rounded-lg items-center ${isPasswordValid ? "bg-black" : "bg-gray-400"}`}
          disabled={!isPasswordValid}
          onPress={() => router.push("/profilePicture")}
        >
          <Text className="text-white font-semibold text-lg">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatePasswordScreen;
