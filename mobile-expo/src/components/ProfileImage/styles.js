import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderRadius: 999,
    padding: 2,
  },
  wrapperWithBorder: {
    borderColor: '#ff6c6c',
  },
  wrapperWithoutBorder: {
    borderColor: '#fff',
  },
  image: {
    borderRadius: 999,
  },
  smallSizeImage: {
    height: 32,
    width: 32,
  },
  mediumSizeImage: {
    height: 52,
    width: 52,
  },
  largeSizeImage: {
    height: 64,
    width: 64,
  },
  canAddNewImageButton: {
    marginLeft: 'auto',
    marginTop: -20,
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 999,
  },
});
