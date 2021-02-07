import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NewsItem = ({news, onPressNext, onPressRemove}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: news.urlToImage}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text>{news.title}</Text>
      </View>
      <View style={styles.iconsContainer}>
        {onPressRemove && (
          <TouchableOpacity onPress={() => onPressRemove()}>
            <View style={styles.iconContainer}>
              <Icon name="times" />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => onPressNext()}>
          <View style={styles.iconContainer}>
            <Icon name="chevron-right" />
          </View>
        </TouchableOpacity>
      </View>
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
    flex: 3,
    justifyContent: 'center',
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
