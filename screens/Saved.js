import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Header} from 'react-native-elements';
import NewsList from '../components/NewsList';
import {getNews, removeNews} from '../db';

const Saved = ({navigation}) => {
  const [newsList, setNewsList] = useState([]);

  const onMount = async () => {
    const newsListFromDb = await getNews();
    setNewsList(newsListFromDb);
  };

  /* on mount fetches news saved on async storage */
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await onMount();
    });

    return unsubscribe;
  }, [navigation]);

  if (newsList.length === 0) {
    return <Text>No saved news</Text>;
  }

  return (
    <>
      <Header centerComponent={{text: 'Saved', style: {color: '#fff'}}} />
      <NewsList
        news={newsList}
        onPressNext={(news) =>
          navigation.navigate('ViewNews', {
            news,
            isSavedNews: true,
          })
        }
        onPressRemove={async (newsId) => {
          await removeNews(newsId);
          await onMount();
        }}
      />
    </>
  );
};

export default Saved;

const styles = StyleSheet.create({});
