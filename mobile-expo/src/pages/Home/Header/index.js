import React, { useCallback } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import logo from '../../../assets/logo.png';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import Icon from '../../../components/Icon';

export default function Header() {
  const navigation = useNavigation();

  const handleSearch = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <Icon onPress={handleSearch} iconName="md-search" />
    </View>
  );
}
