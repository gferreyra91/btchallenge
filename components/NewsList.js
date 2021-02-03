import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({news, onPress}) => {
  return (
    <FlatList
      data={news}
      renderItem={({item, index}) => (
        <NewsItem news={item} onPress={() => onPress(item)} />
      )}
      ListEmptyComponent={<Text>Empty list</Text>}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({});
