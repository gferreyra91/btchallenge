import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {getNews, saveNews} from '.';
import {MOCK_ARTICLES} from '../mocks';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe('getNews', () => {
  it('if no news are stored in db, getNews() returns an empty array', async () => {
    mockAsyncStorage.getItem = jest.fn(([keys], callback) => {
      // do something here to retrieve data
      return null;
    });
    const getNewsResult = await getNews();
    expect(mockAsyncStorage.getItem).toBeCalledWith('news');
    expect(getNewsResult.length).toBe(0);
  });

  it('if news are stored in db, getNews() returns an array of news items', async () => {
    mockAsyncStorage.getItem = jest.fn(([keys], callback) => {
      // do something here to retrieve data
      return JSON.stringify(MOCK_ARTICLES);
    });
    const getNewsResult = await getNews();
    expect(mockAsyncStorage.getItem).toBeCalledWith('news');
    expect(getNewsResult).toMatchObject(MOCK_ARTICLES);
  });
});

describe('saveNews', () => {
  it('saveNews() stores the item', async () => {
    mockAsyncStorage.getItem = jest.fn(([keys], callback) => {
      // do something here to retrieve data
      return null;
    });
    const newsToSave = MOCK_ARTICLES[0];
    await saveNews(newsToSave);
    expect(mockAsyncStorage.getItem).toBeCalledWith('news');
    expect(mockAsyncStorage.setItem).toBeCalledWith(
      'news',
      JSON.stringify([newsToSave]),
    );
  });
});
