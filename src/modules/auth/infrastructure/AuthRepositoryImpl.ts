import { AuthRepository } from "../domain/AuthRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthRepositoryImpl implements AuthRepository {

  async saveUserName(name: string): Promise<void> {
    await AsyncStorage.setItem("userName", name);
  }

  getUserName(): string | null {
    return AsyncStorage.getItem("userName") as unknown as string;
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const response = await fetch('https://beework.kuskaya.co/api/auth/sign-in', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: password,
        })
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      if (response.body && response.headers.getSetCookie()) {
        const cookie = response.headers.getSetCookie()[0];
        const sessionCookie = decodeURIComponent(
          cookie.split('__session=')[1]?.split(';')[0]
        );
        const sessionData = JSON.parse(sessionCookie);
        const token = sessionData.token;
        return token;
        /*const userResponse = await axios.get(
          'https://hayduk-qa.sparetrackr.com/api/auth/me',
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

        if (role) {
          const hasPermission = await handleLocationPermission();
          if (!hasPermission) {
            setLoading(false);
            return;
          }

          // Guarda los datos de sesión en AsyncStorage
          await AsyncStorage.setItem(
            'userSession',
            JSON.stringify({ token, membershipId, firstName, role, profilePicture })
          );

          const session = (await AsyncStorage.getItem('userSession')) || '';

          // Navega a la pantalla Home después de conceder permisos
          navigation.navigate('Home', { token, membershipId, firstName, role, session });
        } else {
          throw new Error("Lo siento, debe tener el perfil de verificador o conductor para acceder a la aplicación");
        }*/
      } else {
        throw new Error("Login Failed: Invalid email or password");
      }

      //const data = await response.json();
      //return data.token;
    } catch (error) {
      throw new Error("Error de autenticación");
    }
  }
}
