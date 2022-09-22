import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const imageSizes = {
  md: styles.mediumSizeImage,
  lg: styles.largeSizeImage,
  sm: styles.smallSizeImage,
};

const DEFAULT_IMAGE =
  'https://thumbs.dreamstime.com/b/%C3%ADcone-da-pessoa-no-fundo-preto-vetor-cont%C3%ADnuo-da-pessoa-90447216.jpg';

export default function ProfileImage({
  uri,
  hasStory = false,
  canAddNewStory = false,
  size = 'lg',
  onAddNewStory = () => {},
}) {
  const wrapperStyle = hasStory
    ? styles.wrapperWithBorder
    : styles.wrapperWithoutBorder;

  return (
    <View>
      <View style={[styles.wrapper, wrapperStyle]}>
        <Image
          source={{ uri: uri ? uri : DEFAULT_IMAGE }}
          style={[styles.image, imageSizes[size]]}
        />
      </View>
      {canAddNewStory && (
        <TouchableOpacity
          style={styles.canAddNewImageButton}
          onPress={onAddNewStory}>
          <AntDesign name="pluscircle" size={18} color="#ff6c6c" />
        </TouchableOpacity>
      )}
    </View>
  );
}
