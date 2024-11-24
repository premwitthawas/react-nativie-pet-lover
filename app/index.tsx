import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={{
      flex: 1,
    }}>
      <Link href='/login'>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 30,
        }}>Go to Login Screen</Text>
      </Link>
    </View>
  )
}