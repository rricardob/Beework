import { AuthRepository } from "../domain/AuthRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export class AuthRepositoryImpl implements AuthRepository {

  async saveUserName(name: string): Promise<void> {
    await AsyncStorage.setItem("userName", name);
  }

  getUserName(): string | null {
    return AsyncStorage.getItem("userName") as unknown as string;
  }

  async login(email: string, password: string): Promise<string> {
    try {


          const email = 'rbueno@nutechcorp.com';
      const password = 'Ric@rdo2025' ;
      const requestData = { email, password };
      const response = await axios.post(
          'https://beework.kuskaya.co/api/auth/sign-in',
          requestData
      );



      if (response.data === true && response.headers['set-cookie']) {
        const cookie = response.headers['set-cookie'][0];
        const sessionCookie = decodeURIComponent(
            cookie.split('__session=')[1]?.split(';')[0]
        );
        const sessionData = JSON.parse(sessionCookie);
        const token = sessionData.token;
        console.log("token",token);
      } else {
        console.log('Login Failed: Invalid email or password');
      }
    } catch (error) {
      console.error('Request Error:', error);

    }



     return "";
  }
}
