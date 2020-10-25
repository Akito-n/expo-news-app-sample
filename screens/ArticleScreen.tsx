import React from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import {StackParamList} from '../navigation/AppNavigator'
import { WebView } from 'react-native-webview'
import { useDispatch, useSelector } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'
import ClipButton from '../components/clipButton';

const ArticleScreen: React.FC = () => {

  const dispatch =  useDispatch()
  const user = useSelector((state) => state.user)
  const clips = user.clips

  const isClipped = () => {
    return clips.some(clip => clip.url === article.url)
  }

  const toggleClip = () => {
    if(isClipped()){
      dispatch(deleteClip({clip: article}))
    } else {
      dispatch(addClip({clip: article}))
    }
    }

  const route = useRoute<RouteProp<StackParamList, 'Article'>>()
  const article = route.params.article
  // newsapiにurlがない可能性を考慮している
  const url = article.url ?? 'https://www.google.com/'

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
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
