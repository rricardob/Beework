import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";
import { useAuth } from "../../../src/modules/auth/context/AuthStore";
import { SaveUserNameUseCase } from "../../../src/modules/auth/usecases/SaveUserNameUseCase";
import { AuthRepositoryImpl } from "../../../src/modules/auth/infrastructure/AuthRepositoryImpl";
import { Formik } from "formik";
import { loginSchema } from "../../../src/modules/auth/validation/loginSchema";

const authRepository = new AuthRepositoryImpl();
const saveUserNameUseCase = new SaveUserNameUseCase(authRepository);

const LoginScreen = () => {
  const { setUserName, setEmail } = useAuth();

  const handleNext = (values: any) => {
    const { inputValue } = values;
    if (inputValue.includes("@")) {
      setEmail(inputValue);
      setUserName("");
    } else {
      setUserName(inputValue);
      setEmail("");
    }

    saveUserNameUseCase.execute(inputValue);
    router.push("/(stack)/enterYourPassword");
  };

  return (
    <View className="flex-1 justify-between p-4">
      <Formik<{ inputValue: string }>
        initialValues={{ inputValue: "" }}
        validationSchema={loginSchema}
        onSubmit={handleNext}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <View className="items-center">
              <View className="w-12 h-12 bg-gray-300 rounded-full mb-6" />
              <Text className="text-2xl mb-4 font-poppins-bold">
                To get started, first enter your phone, email, or @username
              </Text>

              <View className="w-full flex-row items-center border border-gray-300 rounded-md px-4 py-3 mb-4">
                <TextInput
                  className="flex-1 text-base"
                  placeholder="Phone, email or username"
                  onChangeText={handleChange("inputValue")}
                  onBlur={handleBlur("inputValue")}
                  value={values.inputValue}
                />
                {values.inputValue.trim() !== "" && (
                  <Ionicons name="arrow-forward-circle-outline" size={24} color="gray" />
                )}
              </View>
              {touched.inputValue && errors.inputValue && (
                <Text className="text-red-500">{errors.inputValue}</Text>
              )}
            </View>

            <View className="flex-row justify-between mb-6 w-full items-center">
              <Pressable
                className="text-left"
                onPress={() => router.push("/(stack)/findYourTwitterAccount")}
              >
                <Text className="text-black">Forgot password?</Text>
              </Pressable>

              <Pressable
                className={`py-3 px-6 text-right rounded-lg text-base ${values.inputValue.trim() !== "" ? "bg-black" : "bg-gray-400"}`}
                onPress={() => handleSubmit()}
                disabled={values.inputValue.trim() === ""}
              >
                <Text className="text-white font-semibold text-[18px] text-center">Next</Text>
              </Pressable>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
