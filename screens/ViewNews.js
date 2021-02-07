import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import WebView from 'react-native-webview';
import {saveNews} from '../db';

const ViewNews = ({route, navigation}) => {
  const news = route.params.news;

  /* determinate if shows save button or not */
  const isSavedNews = route.params.isSavedNews;

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{
          icon: 'arrow-left',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{text: news.title, style: {color: '#fff'}}}
        rightComponent={
          !isSavedNews && {
            icon: 'save',
            color: '#fff',
            onPress: async () => {
              await saveNews(news);
              navigation.navigate('Saved');
            },
          }
        }
      />

      <WebView source={{uri: news.url}} />
    </View>
  );
};

export default ViewNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
