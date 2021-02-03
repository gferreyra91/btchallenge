import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
const ViewNews = ({route}) => {
  const newsUrl = route.params.url;
  return (
    <View style={styles.container}>
      <WebView source={{uri: newsUrl}} />
    </View>
  );
};

export default ViewNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
