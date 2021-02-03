import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import NewsList from '../components/NewsList';
import {saveNews} from '../db';
import {MOCK_ARTICLES} from '../mocks';

const Feed = ({navigation}) => {
  return (
    <NewsList
      news={MOCK_ARTICLES}
      onPress={(news) =>
        navigation.navigate('ViewNews', {
          news,
          saveNews: () => {
            saveNews(news);
            Alert.alert('News saved', undefined, [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('Saved'),
              },
            ]);
          },
        })
      }
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
