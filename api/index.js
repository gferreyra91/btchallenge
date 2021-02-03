import axios from 'axios';

const getNewsList = async (category) => {
  const apiResult = await axios.get('http://newsapi.org/v2/top-headlines', {
    params: {
      category: category,
      country: 'us',
      apiKey: '3489ea6199ca482ea942c25916285eec',
    },
  });
  return apiResult.data.articles;
};

export {getNewsList};
