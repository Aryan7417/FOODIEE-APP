import { View, Text, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {Categoriess} from '../constants/constants.js'

const Categories = () => {
    console.warn("Categories:", Categoriess.length)
  return (

    <View className='mt-4' >
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className='overflow-visible'
      contentContainerStyle={{
        paddingHorizontal: 16
          }}
      >
        {
            Categoriess.map((category,index)=>{
                return (
                    <View key={index} className='flex justify-center items-center mr-6' >
                        <TouchableOpacity 
                        className='p-1 rounded-s-full shadow bg-gray-200'
                        >
                            <Text>{category.name}</Text>

                        </TouchableOpacity>
                        
                    </View>
                )
            })
        }

      </ScrollView>
    </View>
  )
}

export default Categories