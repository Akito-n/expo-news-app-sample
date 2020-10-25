import React from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import {StackParamList} from '../navigation/AppNavigator'
import { WebView } from 'react-native-webview'
import { useDispatch } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'

const ArticleScreen: React.FC = () => {

  const dispatch =  useDispatch()

  const route = useRoute<RouteProp<StackParamList, 'Article'>>()
  const article = route.params.article
  // newsapiにurlがない可能性を考慮している
  const url = article.url ?? 'https://www.google.com/'

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={ () => dispatch(addClip({clip: article}))}><Text style={{margin: 10, fontSize: 30}}>press add</Text></TouchableOpacity>
      <TouchableOpacity onPress={ () => dispatch(deleteClip({clip: article}))}><Text style={{margin: 10, fontSize: 30}}>press delete</Text></TouchableOpacity>
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
