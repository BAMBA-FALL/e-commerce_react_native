import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart } from './screens';
const Stack = createNativeStackNavigator();

export default function App() {

const [fontLoader] = useFonts({
      regular: require("./assets/fonts/Poppins-Regular.ttf"),
      bold : require("./assets/fonts/Poppins-Bold.ttf"),
      light: require("./assets/fonts/Poppins-Light.ttf"),
      medium: require("./assets/fonts/Poppins-Medium.ttf"),
      semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
})

   const onLayoutRootView = useCallback(async()=>{
    if(fontLoader){
      await SplashScreen.hideAsync();
    }

   }, [fontLoader]);

   if(!fontLoader){
    return null;
   }




  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name='Bottom Navigation'
      component={BottomTabNavigation}
      options={{headerShown:false}}
      />

      <Stack.Screen
      name='Cart'
      component={Cart}
      options={{headerShown:false}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
