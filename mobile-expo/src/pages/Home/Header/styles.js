import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 50,
    height: 55,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {
    resizeMode: 'contain',
    height: 155,
    width: 155,
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    padding: 10,
    borderRadius: 10,
  },
});
