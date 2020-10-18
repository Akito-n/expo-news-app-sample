import React from 'react'
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import {StackParamList} from '../navigation/AppNavigator'

const ArticleScreen: React.FC = () => {

  const route = useRoute<RouteProp<StackParamList, 'Article'>>()

  return (
    <SafeAreaView>
      <View>
        <Text>{route.params.title}</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default ArticleScreen
