
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator ,TransitionPresets} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Journal from './screens/Journal';
import { Provider } from 'react-redux'
import { store } from './store';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Journal" component={Journal} options={{ presentation: 'modal',headerShown:false}}/>
        </Stack.Navigator>
      </Provider>
       
    </NavigationContainer>
    
  );
}


