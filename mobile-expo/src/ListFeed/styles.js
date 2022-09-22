import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  viewPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textPerfil: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgpubli: {
    height: 220,
    alignItems: 'center',
    borderRadius: 10,
  },
  textDescricao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  areaBtn: {
    flexDirection: 'row',
    paddingleft: 20,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,182,193,0.2)',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  iconBtn: {
    flexDirection: 'row',
  },
  txtComments: {
    color: 'gray',
  },
  containerAreaLocation: {
    width: '100%',
    justifyContent: 'center',
    marginLeft: 10,
  },
  arealocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtlocation: {
    color: 'gray',
  },
});
