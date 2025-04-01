import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import { useAuth } from "../../../src/modules/auth/context/AuthStore";
import { LoginUserUseCase } from "../../../src/modules/auth/usecases/LoginUserUseCase";
import { AuthRepositoryImpl } from "../../../src/modules/auth/infrastructure/AuthRepositoryImpl";

const authRepository = new AuthRepositoryImpl();
const loginUserUseCase = new LoginUserUseCase(authRepository);

const EnterYourPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const { userName, setUserName } = useAuth();

  useEffect(() => {
    // Simulación de cambio de nombre de usuario
    setUserName('Juan');
  }, [setUserName]);


  const handleLogin = async () => {
    try {
      const token = await loginUserUseCase.execute(userName!, password);
      console.log("Token recibido:", token);
      router.push("/profilePicture");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <View className="flex-1 justify-between p-4">
      <View className="items-center">
        <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />
        <Text className="text-2xl mb-4 font-poppins-bold">Enter your password</Text>

        <View className="w-full flex-row justify-between border border-gray-300 rounded-md px-4 py-3 mb-4">
          <Text className="text-base font-poppins-regular">{userName}</Text>
        </View>

        <TextInput
          className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4"
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Pressable className="w-full py-3 bg-black rounded-lg items-center" onPress={handleLogin}>
        <Text className="text-white font-semibold text-lg">Log in</Text>
      </Pressable>
    </View>
  );
};

export default EnterYourPasswordScreen;
