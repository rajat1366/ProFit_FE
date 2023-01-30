import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { useNavigation , useRoute} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons'; 
import * as Animatable from "react-native-animatable"
const Journal = () => {

    const {params:{
        test,
    }} = useRoute();

    const navigation = useNavigation();

    // useLayoutEffect(()=>{
    //     navigation.setOptions({
    //         headerShown:false,
    //     });
    //   },[])

  return (
    <SafeAreaView className=" items-center justify-center bg-[#00CCBB] flex-1">
      
     <Animatable.Image 
        source={require("../assets/orderLoading.gif")}
        animations="slideInUp"
        iterationCount={1}
        className="h-96 w-96 "
     />
     <Animatable.Text 
        animation="slideInUp"
        iterationCount = {1}
        className="text-lg my-10 text-white font-bold text-center"
     >
     <TouchableOpacity className="p-2 bg-gray-100 rounded-full" onPress={navigation.goBack}>
            <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
        <Text>Journal{test}</Text>
     </Animatable.Text>
     
      
      
    </SafeAreaView>
  )
}

export default Journal