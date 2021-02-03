import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import NewsList from '../components/NewsList';
import {getNews, saveNews} from '../db';

const Saved = ({navigation}) => {
  const [newsList, setNewsList] = useState([]);

  /* on mount fetch news saved on async storage */
  useEffect(() => {
    async function onMount() {
      const newsListFromDb = await getNews();
      setNewsList(newsListFromDb);
    }
    onMount();
  }, [newsList]);

  if (newsList.length === 0) {
    return <Text>No saved news</Text>;
  }

  return (
    <NewsList
      news={newsList}
      onPress={(news) =>
        navigation.navigate('ViewNews', {
          news,
          isSavedNews: true,
        })
      }
    />
  );
};

export default Saved;

const styles = StyleSheet.create({});
