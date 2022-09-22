import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ProfileImage from '../ProfileImage';
import styles from './styles';

export default function StoriesList({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.itemContainer,
              { paddingLeft: index === 0 ? 16 : 0 },
              { paddingRight: index === data.length - 1 ? 66 : 0 },
            ]}>
            <ProfileImage
              uri={item?.uri}
              hasStory={item.hasStory}
              canAddNewStory={item.canAddNewStory}
            />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
