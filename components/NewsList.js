import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import NewsItem from './NewsItem';

const NewsList = ({news, onPressNext, onPressRemove}) => {
  return (
    <FlatList
      data={news}
      renderItem={({item, index}) => (
        <NewsItem
          news={item}
          onPressNext={() => onPressNext(item)}
          onPressRemove={onPressRemove ? () => onPressRemove(index) : null}
        />
      )}
      keyExtractor={(item) => item.url}
      ListEmptyComponent={<Text>Empty list</Text>}
    />
  );
};

export default NewsList;

const styles = StyleSheet.create({});
