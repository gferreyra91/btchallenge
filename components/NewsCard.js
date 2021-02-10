import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';

const NewsCard = ({news, onPressNext, onPressRemove}) => {
  return (
    <Card>
      <Card.Title>{news.title}</Card.Title>
      <Card.Divider />
      <Card.Image source={{uri: news.urlToImage}} />
      <Card.Divider />
      <Button
        title="View"
        onPress={() => onPressNext()}
        buttonStyle={styles.nextButton}
      />
      <Card.Divider />
      {onPressRemove && (
        <Button
          title="Remove"
          onPress={() => onPressRemove()}
          buttonStyle={styles.removeButton}
        />
      )}
    </Card>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  removeButton: {
    backgroundColor: 'red',
  },
});
