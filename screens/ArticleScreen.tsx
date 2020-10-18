import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView} from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import {StackParamList} from '../navigation/AppNavigator'
import { WebView } from 'react-native-webview'

const ArticleScreen: React.FC = () => {

  const route = useRoute<RouteProp<StackParamList, 'Article'>>()
  const article = route.params.article
  // newsapiにurlがない可能性を考慮している
  const url = article.url ?? 'https://www.google.com/'

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: url
        }}
      />
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
