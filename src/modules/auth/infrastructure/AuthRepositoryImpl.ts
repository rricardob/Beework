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
        return token;
      } else {
        throw new Error("Login Failed: Invalid email or password");
      }
    } catch (error) {
      throw new Error("Credenciales incorrectas");
    }
  }

  async callMe(token: string): Promise<void> {
    try {

      const userResponse = await axios.get(
        'https://beework.kuskaya.co/api/auth/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const membershipId = userResponse.data.memberships[0].id;
      const firstName = userResponse.data.memberships[0].firstName;
      var profilePicture = '/images/defaultProfilePicture.png';
      if (userResponse.data.memberships[0].avatars[0]) {
        profilePicture = userResponse.data.memberships[0].avatars[0].downloadUrl;
      }
      const userRoles = userResponse.data.memberships[0].roles;
      const role = userRoles.includes('driver')
        ? 'driver'
        : userRoles.includes('verifier')
        ? 'verifier'
        : '';

        await AsyncStorage.setItem(
          'userSession',
          JSON.stringify({ token, membershipId, firstName, role, profilePicture })
        );
      
    } catch (error) {
      throw new Error("Credenciales incorrectas");
    }
  }

}
