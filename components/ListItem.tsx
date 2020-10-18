import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import SampleImage from '../assets/images/ak.jpg'
import dayjs from 'dayjs'

export type ContentProps = {
  title: string
  author: string
  urlToImage: string
  publishedAt: string
}

const ListItem: React.FC<ContentProps> = ({
  title,
  urlToImage,
  author,
  publishedAt
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
      { !!urlToImage && <Image source={{ uri: urlToImage }} style={styles.image} />}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
        <Text style={styles.subText}>{ dayjs(publishedAt).format('L LT') }</Text>
      </View>
    </View>
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
