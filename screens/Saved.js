import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import NewsList from '../components/NewsList';
import {getNews} from '../db';

const Saved = ({navigation}) => {
  const [news, setNews] = useState([]);

  /* on mount fetch news saved on async storage */
  useEffect(() => {
    async function onMount() {
      const newsList = await getNews();
      setNews(newsList);
    }
    onMount();
  }, [news]);

  if (news.length === 0) {
    return <Text>No saved news</Text>;
  }

  return (
    <NewsList
      news={news}
      onPress={(news) =>
        navigation.navigate('ViewNews', {
          news,
          saveNews: () => saveNews(news),
        })
      }
    />
  );
};

export default Saved;

const styles = StyleSheet.create({});
