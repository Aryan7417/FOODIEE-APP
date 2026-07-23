import { View, Text, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather"
import {themeColors } from '../theme/theme'
import Categories from '../components/Categories'

const HomeScreen = () => {
  return (
    <SafeAreaView className=' bg-white ' >
      
      <StatusBar barStyle='dark-content' />

      <View className='flex-row items-center space-x-2 px-4 bd-2' >

        <View className='flex-row flex-1 items-center p-3  rounded-full border border-gray-300' >

          <Icon.Search height="25" width="25" color='gray'/>
          <TextInput  placeholder='Restaurants' className='ml-2 flex-1'  />
          <View className='flex-row items-center space-x-1 border-l-0 pl-2 border-l-gray-300' >

            <Icon.Map height="20" width="20" color='gray' />
            <Text className='text-gray-600'> New Delhi,IND</Text>
          </View>

        </View>
        <View style={{backgroundColor:themeColors.bgColor(1 ), borderRadius:9999 }}  className='p-3 m-3 '>
          <Icon.Sliders height="20" width= "20" strokeWidth={2.6} color='white' />
        </View>
       
      </View>
      
      {/* MAIN */}
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom:20
      }}
      >
        {/* catagories */}
        <Categories/>


      </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen

