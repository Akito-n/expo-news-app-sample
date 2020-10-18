import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem, { ContentProps, ArticleProp } from '../components/ListItem'
import ListItemData from '../dummy/listItemData'
import {env} from '../config/env'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import '../config/dayjs'

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${env.newsApi}`

const HomeScreen: React.FC = () => {
  const [articles, setArticles ] = useState<ArticleProp[]>(ListItemData)
  const { navigate } = useNavigation()
  useEffect(() => {
  fetchArticles()

  }, [])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      setArticles(() => (response.data.articles))
    } catch (e) {
      console.log(e)
    }
  }

  const moveToArticleDetail = (item: ArticleProp ) => {
    navigate(`Article`, {article: item})
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            moveToArticleDetail={(item) => {
              navigate(`Article`, {article: item})
            }}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default HomeScreen
