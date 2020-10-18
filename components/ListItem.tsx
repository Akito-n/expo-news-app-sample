import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import SampleImage from '../assets/images/ak.jpg'
import dayjs from 'dayjs'
import { useNavigation } from '@react-navigation/native'

export type ArticleProp = {
  title: string
  author: string
  urlToImage: string
  publishedAt: string
}

export type ContentProps = {
  item: ArticleProp
  moveToArticleDetail: (item: ArticleProp) => void
}

const ListItem: React.FC<ContentProps> = ({
  item,
  moveToArticleDetail
}) => {
  return (
    <TouchableOpacity onPress={() => { moveToArticleDetail(item)}}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
        { !!item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            {item.title}
          </Text>
          <Text style={styles.subText}>{item.author}</Text>
          <Text style={styles.subText}>{ dayjs(item.publishedAt).format('L LT') }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between'
  },
  image: {
    flex: 1
  },
  text: {
    fontSize: 16
  },
  subText: { fontSize: 12, color: 'gray' }
})

export default ListItem
