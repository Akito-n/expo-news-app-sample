import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import {StackParamList} from '../navigation/AppNavigator'

const ArticleScreen: React.FC = () => {

  const route = useRoute<RouteProp<StackParamList, 'Article'>>()
  const article = route.params.article

  return (
    <SafeAreaView>
      <View>
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
        <Text>{article.title}</Text>
        <Text>{article.author}</Text>
        <Text>{article.publishedAt}</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: 100,
    height: 200,
    flex: 1
  },
})

export default ArticleScreen
