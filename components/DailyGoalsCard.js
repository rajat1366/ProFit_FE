import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { Feather } from '@expo/vector-icons'; 

const DailyGoalsCard = () => {
  const props = {
    activeStrokeWidth: 3,
    inActiveStrokeWidth: 3,
    inActiveStrokeOpacity: 0.2
  };
  
  
  return (
    <View className="bg-[#2A2B2F]  p-3 rounded-xl">
      <View className="flex-row">
        <Text className="text-white font-medium text-lg flex-1"> Your daily goals</Text>
        <AntDesign name="right" size={17} color="white" />
        
      </View>

      <View >
      <Text className="text-gray-500 text-xs p-1 font-medium">Last 7 Days</Text>
      </View>

      <View className="flex-row pt-4">
        <View className ="flex-1 ">
            <Text className="text-[#669DF8] text-lg font-bold text-"> 3/7 </Text>
            <Text className="text-[#669DF8]"> Achieved</Text>
        </View>

        <View className="space-x-1 flex-row">
              
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">F</Text>
              </View>
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">S</Text>
              </View>
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">S</Text>
              </View>
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">M</Text>
              </View>
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">T</Text>
              </View>
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">W</Text>
              </View>
              <View className="items-center space-y-1">
              <Feather name="check" size={15} color="#669DF8" />
                <CircularProgressBase
                  {...props}
                  value={80}
                  radius={12}
                  activeStrokeColor={'#00DEB0'}
                  inActiveStrokeColor={'#00DEB0'}
                  >
                  <CircularProgressBase
                      {...props}
                      value={87}
                      radius={7}
                      activeStrokeColor={'#669DF8'}
                      inActiveStrokeColor={'#669DF8'}
                  >   
                  
                      
                  </CircularProgressBase>
                </CircularProgressBase>
                <Text className=" text-white text-xs">T</Text>
              </View>
              
              
        </View>
      </View>
      
      
    </View>
  )
}

export default DailyGoalsCard