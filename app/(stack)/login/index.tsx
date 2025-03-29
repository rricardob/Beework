import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

// Definimos la interfaz del formulario
interface FormData {
  name: string;
}

const LoginScreen = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    name: "",
  });

  // Función para actualizar los campos del formulario
  const handleInputChange = (field: keyof FormData, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Verifica si todos los campos están llenos
  const isFormValid = (): boolean => {
    return formData.name.trim() !== "";
  };

  return (
    <View className="flex-1 justify-between p-4">
      {/* Contenedor del formulario */}
      <View className="items-center">
        {/* Avatar */}
        <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />

        {/* Título */}
        <Text className="text-2xl mb-4 font-poppins-bold">
        To get started, first enter your phone, email, or @username
        </Text>

        {/* Inputs */}
        <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
          <TextInput
            className="flex-1 text-base"
            placeholder="Phone, email or @username"
            value={formData.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />
          {formData.name.trim() !== "" && (
            <Ionicons name="arrow-forward-circle-outline" size={24} color="gray" />
          )}
        </View>

      </View>

      {/* Contenedor del botón */}
      <View className="flex-row justify-between mb-6 w-full items-center">

      <Pressable
      className="text-left"
        onPress={() => router.push('/(stack)/login')}
      >
        <Text className="fml-2 text-black">Forgot password?</Text>
      </Pressable>

        <Pressable
          className={`py-3 px-6 text-right rounded-lg text-base ${isFormValid() ? "bg-black" : "bg-gray-400"
            }`}
          onPress={() => {
            router.push("/(stack)/enterYourPassword");
            console.log(formData);
          }}
          disabled={!isFormValid()}
        >
          <Text className="text-white font-semibold text-[18px] text-center">
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
