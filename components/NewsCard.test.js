import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import NewsCard from './NewsCard';
import {MOCK_ARTICLES} from '../mocks';
import {fireEvent, render} from '@testing-library/react-native';

it('renders correctly', () => {
  const mockOnPressNext = jest.fn();
  const mockOnPressRemove = jest.fn();
  const {getByTestId, toJSON} = render(
    <NewsCard
      news={MOCK_ARTICLES[0]}
      onPressNext={mockOnPressNext}
      onPressremove={mockOnPressRemove}
    />,
  );
  const cardTitle = getByTestId('cardTitle');
  expect(cardTitle.children[0]).toBe(MOCK_ARTICLES[0].title);
  const cardImage = getByTestId('RNE__Image');
  expect(cardImage.props.source.uri).toBe(MOCK_ARTICLES[0].urlToImage);
  expect(toJSON()).toMatchSnapshot();
});
