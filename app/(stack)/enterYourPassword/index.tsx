import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

// Definimos la interfaz del formulario
interface FormData {
  name: string;
  password: string;
}

const EnterYourPasswordScreen = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
  });

  const userData = {
    name: "jon.doe@gmail.com",
  };

  const [showPassword, setShowPassword] = useState(false);

  // Función para actualizar los campos del formulario
  const handleInputChange = (field: keyof FormData, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Verifica si todos los campos están llenos
  const isFormValid = (): boolean => {
    return formData.password.trim() !== "";
  };

  return (
    <View className="flex-1 justify-between p-4">
      {/* Contenedor del formulario */}
      <View className="items-center">
        {/* Avatar */}
        <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />

        {/* Título */}
        <Text className="text-2xl mb-4 font-poppins-bold">
        Enter your password
        </Text>

        {/* Inputs */}
        <View className="w-full flex-row justify-between border border-gray-300 rounded-md px-4 py-3 mb-4">
          <Text className="text-base font-poppins-regular">{userData.name}</Text>
        </View>

        {/* Input de contraseña */}
        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
            <TextInput
              className="flex-1 text-base"
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <Ionicons name="eye-outline" size={24} color="black" />
          </View>

      </View>

      {/* Contenedor inferior */}
      <View className="mb-6">
        {/* Botón Next */}
        <Pressable
          className={`w-full py-3 rounded-lg items-center ${isFormValid() ? "bg-black" : "bg-gray-400"}`}
          disabled={!isFormValid()}
          onPress={() => router.push("/profilePicture")}
        >
          <Text className="text-white font-semibold text-lg">Log in</Text>
        </Pressable>

        <Pressable
      className="w-full py-6 items-center"
        onPress={() => router.push('/(stack)/findYourTwitterAccount')}
      >
        <Text className="fml-2 text-black">Forgot password?</Text>
      </Pressable>

      </View>
    </View>
  );
};

export default EnterYourPasswordScreen;
