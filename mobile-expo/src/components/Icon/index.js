import React from 'react';
import { TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const Icon = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <LinearGradient style={styles.gradient} colors={['#fcad44', '#ff6c6c']}>
        <Ionicons name={iconName} size={20} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Icon;
