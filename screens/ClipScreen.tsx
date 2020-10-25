import React from 'react'
import {useSelector} from 'react-redux'
import { StyleSheet, SafeAreaView, Text, FlatList} from 'react-native'
import ListItem, { ContentProps, ArticleProp } from '../components/ListItem'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

const ClipScreen: React.FC = () => {

  const { navigate } = useNavigation()
  const user = useSelector((state) => state.user)
  const {clips} = user
  console.log(clips)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={clips}
      renderItem={({item}) => {
        return (
        <ListItem
            item={item}
            moveToArticleDetail={(item) => {
              navigate(`Article`, {article: item})
            }}
          />
        )
      }}
      keyExtractor={(_, index) => index.toString()}
      >
      </FlatList>
    </SafeAreaView>
  )
}

export default ClipScreen
