import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 3,
    paddingBottom: 16,
  },
  itemSeparator: {
    width: 8,
    height: 8,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ccc',
    marginTop: 6,
  },
});
