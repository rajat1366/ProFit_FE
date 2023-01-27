import { View, Text ,Image} from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
    const props = {
        activeStrokeWidth: 13,
        inActiveStrokeWidth: 13,
        inActiveStrokeOpacity: 0.2
      };
      const navigation = useNavigation();

      useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        });
      },[])
  return (

    <SafeAreaView className=" bg-[#202125] flex-1">
        <View className="flex-row items-center mx-4 space-x-4 ">
            <View className="flex-1"></View>
            <Ionicons name="information-circle-outline" size={32} color="white" />
            <Image 
                source={{
                uri:'https://links.papareact.com/wru'
                }}
                className="h-10 w-10 bg-gray-300 p-4 rounded-full "
            />

          
        </View>
        <View className=" items-center justify-center pt-10">
        <CircularProgressBase
            {...props}
            value={80}
            radius={100}
            activeStrokeColor={'#00DEB0'}
            inActiveStrokeColor={'#00DEB0'}
            >
            <CircularProgressBase
                {...props}
                value={87}
                radius={80}
                activeStrokeColor={'#669DF8'}
                inActiveStrokeColor={'#669DF8'}
            >   
            <View className="items-center">
                 <Text className="text-[#00DEB0] text-5xl font-bold" >42</Text>
                <Text className="text-[#669DF8] text-3xl">5,372</Text>
            </View>
                
            </CircularProgressBase>
          </CircularProgressBase>
          <View className=" p-4 flex-row space-x-2">
            <FontAwesome5 name="heartbeat" size={24} color="#00DEB0" />
            <Text className="text-white font-medium text-lg">Heart Pts</Text>

            <MaterialCommunityIcons name="run-fast" size={24} color="#669DF8" />
            <Text className="text-white font-medium text-lg">Steps</Text>
          </View>
        </View>
       
      
    </SafeAreaView>
    
  )
}

export default HomeScreen