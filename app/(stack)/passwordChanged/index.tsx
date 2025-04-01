import {useState} from "react";
import {View, Text, TextInput, Pressable, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {router} from "expo-router";
import {Platform} from "react-native";

// Definimos la interfaz del formulario
interface FormData {
  password: string;
  confirmPassword: string;
}

const PasswordChanged = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Función para actualizar los campos del formulario
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({...prev, [field]: value}));
  };

  // Verifica si todos los campos están llenos y coinciden
  const isFormValid = (): boolean => {
    return (
      formData.password.trim() !== "" &&
      formData.confirmPassword.trim() !== "" &&
      formData.password === formData.confirmPassword
    );
  };

  const handleIconPress = () => {
    if (isFormValid()) {
      router.push("/(stack)/ressettingPassword");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
      keyboardVerticalOffset={100}
    >
      <View className="flex-1 justify-between p-4">

        {/* Contenedor del formulario */}
        <View className="items-left">

          {/* Avatar */}
          <View className="items-center">
            <View className="w-12 h-12 bg-gray-300 rounded-full mb-6"/>
          </View>

          {/* Título */}
          <Text className="text-3xl mb-6 font-poppins-bold">You’re all set. You’ve successfully changed your password.</Text>

          {/* Descripción */}
          <Text className="text-base text-gray-600 mb-8 font-poppins">
            Strong passwords include numbers, letters and punctuation marks.
          </Text>
          <Text className="text-base text-gray-600 mb-8 font-poppins">
            Resetting your password will log you out of all your active sessions.{" "}
            <Text className="text-blue-500">Learn more</Text>
          </Text>

        </View>

        {/* Contenedor del botón */}
        <View className="w-full">
          <Pressable
            className={`py-3 px-6 rounded-lg text-base bg-black`}
            onPress={() => {
            }}
          >
            <Text className="text-white font-semibold text-[18px] text-center">
              Continue to Twitter
            </Text>
          </Pressable>
        </View>
      </View>

    </KeyboardAvoidingView>
  );
};

export default PasswordChanged;
