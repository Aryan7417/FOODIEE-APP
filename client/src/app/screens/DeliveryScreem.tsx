import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants/constants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps'
import { themeColors } from '../theme/theme'
import * as Icon from "react-native-feather"


export default function DeliveryScreem() {
    const restaurant = featured.restaurants[0]
    const navigation = useNavigation()

    console.log(restaurant);
console.log("Latitude:", restaurant.lat);
console.log("Longitude:", restaurant.lng);
  return (
    <View style={{ flex: 1 }}>
  <MapView
  //provider={PROVIDER_GOOGLE}
    style={{ flex: 1 }}
    initialRegion={{
      latitude: restaurant.lat,
      longitude: restaurant.lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
    className='flex-1'
    mapType='standard'
  >
    <Marker
      coordinate={{
        latitude: restaurant.lat,
        longitude: restaurant.lng,
        
      }}
      title={restaurant.name}
      description={restaurant.description}
      pinColor={themeColors.bgColor(1)}

    />
    
  </MapView>

  <View className='rounded-t-3xl -mt-12 bg-white relative'>
    <View className='flex-row justify-between px-5 pt-10'>
        <View>
            <Text className='text-lg text-gray-700 font-semibold'>
                Estimatd Arrival
            </Text>
            <Text className='text-4xl font-extrabold text-gray-700'>
                20-30 Minutes

            </Text>
            <Text className='mt-2 text-gray-700 font-semibold'>
                Your order is own its way !
            </Text>

        </View>
        <Image className='w-24 h-24 ' source={require('../../../assets/images/abc/22.jpg')} />
    </View>
    <View style={{backgroundColor:themeColors.bgColor(0.8)}}
    className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'
    >
        <View className='p-1 rounded-full'
        style={{backgroundColor:'rgba(255,255,255,0.4)'}}>
            <Image className='h-16 w-16 rounded-full' source={require('../../../assets/images/abc/guy.jpg')} />

        </View>
        <View className='flex-1 ml-5'>
            <Text className='text-6 font-bold text-white'>
                Aryan yadav
            </Text>
            <Text className=' font-bold text-white'>
                Your Rider
            </Text>
        </View>

        <View className='flex-row iten-center space-x-3 mr-3'>
            <TouchableOpacity className='bg-white p-2 rounded-full'>
                <Icon.Phone fill={themeColors.bgColor(1)} strokeWidth={1}/>
            </TouchableOpacity>

              <TouchableOpacity
              onPress={()=>navigation.navigate('Home')}
              className='bg-white p-2  ml-4 rounded-full'>
                <Icon.X stroke={'red'} strokeWidth={4}/>
            </TouchableOpacity>
        </View>

    </View>


  </View>

</View>
  )
}

