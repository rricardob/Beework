
import { View, Text, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from './home/HomeScreen';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile</Text>
  </View>
);

const TercerScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings</Text>
  </View>
);

const CuartoScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Options</Text>
  </View>
);

const QuintoScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Favorites</Text>
  </View>
);

const CustomTabBarButton = ({ children, onPress, focused }: { children: React.ReactNode; onPress: () => void; focused: boolean }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: pressed ? 0.7 : 1,
        marginHorizontal: 10,
      }]}
    >
      <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        {children}
      </View>
    </Pressable>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          height: 110,
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 10 },
          paddingHorizontal: 10,
        },
        tabBarItemStyle: { justifyContent: 'flex-start', marginTop: 20 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#B22D2D' : 'black', fontFamily: 'Poppins-Regular', marginTop: 5 }}>Inicio</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home-outline" size={30} color={focused ? '#B22D2D' : 'black'} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState?.selected} />,
          headerShown: false, // Esta es la línea que oculta el encabezado
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#B22D2D' : 'black', fontFamily: 'Poppins-Regular', marginTop: 5 }}>Buscar Tareas</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search-outline" size={30} color={focused ? '#B22D2D' : 'black'} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState?.selected} />,
          headerShown: false, // Esta es la línea que oculta el encabezado
        }}
      />

      <Tab.Screen
        name="Settings"
        component={TercerScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#B22D2D' : 'black', fontFamily: 'Poppins-Regular', marginTop: 5 }}>Mis Tareas</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="calendar-outline" size={30} color={focused ? '#B22D2D' : 'black'} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState?.selected} />,
          headerShown: false, // Esta es la línea que oculta el encabezado
        }}
      />

      <Tab.Screen
        name="Options"
        component={CuartoScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#B22D2D' : 'black', fontFamily: 'Poppins-Regular', marginTop: 5 }}>Pagos</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="happy-outline" size={30} color={focused ? '#B22D2D' : 'black'} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState?.selected} />,
          headerShown: false, // Esta es la línea que oculta el encabezado
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={QuintoScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#B22D2D' : 'black', fontFamily: 'Poppins-Regular', marginTop: 5 }}>Favoritos</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-circle-outline" size={30} color={focused ? '#B22D2D' : 'black'} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState?.selected} />,
          headerShown: false, // Esta es la línea que oculta el encabezado
        }}
      />
    </Tab.Navigator>
  );
};


export default function AppNavigation() {
  return (
    <MyTabs />
  );
}

