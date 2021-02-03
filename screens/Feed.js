import React, {useEffect, useState} from 'react';
import {Alert, Picker, StyleSheet, Text} from 'react-native';
import {getNewsList} from '../api';
import NewsList from '../components/NewsList';
import {CATEGORY} from '../const';
import {saveNews} from '../db';
import {capitalize} from 'lodash';
const Feed = ({navigation}) => {
  /* default category selected is bussiness */
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.business);

  /* state that holds the news list fetched */
  const [newsList, setNewsList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  /* every time that selectedCategory changes
  fetch the news list for the selected category */
  useEffect(() => {
    async function fetchData() {
      /* The api errors can be handle in the getNewsList function too, 
      but here is faster */
      try {
        setIsLoading(true);
        const newsListResult = await getNewsList(selectedCategory);
        setIsLoading(false);
        setNewsList(newsListResult);
      } catch (error) {
        Alert.alert(error.message);
      }
    }
    fetchData();
  }, [selectedCategory]);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedCategory(itemValue)
        }>
        {/* for each category create the picker item component */}
        {Object.keys(CATEGORY).map((category) => (
          <Picker.Item label={capitalize(category)} value={category} />
        ))}
      </Picker>
      <NewsList
        news={newsList}
        onPress={(news) =>
          navigation.navigate('ViewNews', {
            news,
            isSavedNews: false,
          })
        }
      />
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({});
