import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const NewsItem = ({news, onPressNext, onPressRemove}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: news.urlToImage}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text>{news.title}</Text>
      </View>
      {onPressRemove && (
        <TouchableOpacity onPress={() => onPressRemove()}>
          <View style={styles.nextContainer}>
            <Text>X</Text>
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => onPressNext()}>
        <View style={styles.nextContainer}>
          <Text>></Text>
        </View>
      </TouchableOpacity>
    </View>
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
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
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
