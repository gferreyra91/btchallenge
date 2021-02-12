import 'react-native';
import React from 'react';

import NewsList from './NewsList';
import {MOCK_ARTICLES} from '../mocks';
import {fireEvent, render} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByTestId, toJSON} = render(
    <NewsList
      news={MOCK_ARTICLES}
      onPressNext={jest.fn()}
      onPressremove={jest.fn()}
    />,
  );
  expect(toJSON()).toMatchSnapshot();
});
