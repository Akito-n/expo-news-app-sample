import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem, { ContentProps } from './components/ListItem'
import ListItemData from './dummy/listItemData'
import {env} from './config/env'
import axios from 'axios'

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${env.newsApi}`

export default function App() {
  const [articles, setArticles ] = useState<ContentProps[]>(ListItemData)
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            urlToImage={item.urlToImage}
            author={item.author}
            publishedAt={item.publishedAt}
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
