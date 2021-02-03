import AsyncStorage from '@react-native-async-storage/async-storage';

const getNews = async () => {
  /* newsString is a string representation, because asyncStorage only use strings */
  const newsString = await AsyncStorage.getItem('news');
  const newsArray = JSON.parse(newsString);
  if (!newsArray) {
    return [];
  } else {
    return newsArray;
  }
};

const saveNews = async (news) => {
  const newsArray = await getNews();
  newsArray.push(news);
  /* newsString is a string representation, because asyncStorage only use strings */
  const newsString = JSON.stringify(newsArray);
  await AsyncStorage.setItem('news', newsString);
};

export {getNews, saveNews};
