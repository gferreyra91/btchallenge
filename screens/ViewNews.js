import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import WebView from 'react-native-webview';
import {saveNews} from '../db';

const ViewNews = ({route, navigation}) => {
  const news = route.params.news;

  /* determinate if shows save button or not */
  const isSavedNews = route.params.isSavedNews;

  useEffect(() => {
    /* config the header component of react navigation */
    navigation.setOptions({
      title: news.title,
      headerRight: () => {
        if (!isSavedNews) {
          return (
            <TouchableHighlight
              onPress={() => {
                saveNews(news);
                navigation.navigate('Saved');
              }}>
              <Text>Save</Text>
            </TouchableHighlight>
          );
        }
      },
    });
  }, []);

  return (
    <View style={styles.container}>
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
