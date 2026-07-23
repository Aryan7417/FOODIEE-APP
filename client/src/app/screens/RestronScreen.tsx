import { View, Text, ScrollView, Image } from 'react-native'
import React, { useRef } from 'react'
import { useRoute } from '@react-navigation/native'
const RestronScreen = () => {
  const {params} = useRoute()
  let item = params
  //console.warn('')
  return (
    <View>
      <ScrollView>
        <View className='relative' >
          <Image className='w-full h-72' source={item.image}   />

        </View>
      </ScrollView>
    </View>
  )
}

export default RestronScreen