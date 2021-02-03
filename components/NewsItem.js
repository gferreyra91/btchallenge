import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const NewsItem = ({news, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress()}>
      <View style={styles.imageContainer}>
        <Image source={{uri: news.urlToImage}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text>{news.title}</Text>
      </View>
      <View style={styles.nextContainer}>
        <Text>></Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  imageContainer: {
    flex: 2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  nextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
