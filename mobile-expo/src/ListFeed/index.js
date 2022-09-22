import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

export default function ListFeed({ data }) {
  const {
    name,
    description,
    imagePublish,
    imageProfile,
    likers,
    location,
    comments,
  } = data;

  return (
    <View style={styles.container}>
      <View style={styles.viewPerfil}>
        <Image source={{ uri: imageProfile }} style={styles.fotoPerfil} />
        <View style={styles.containerAreaLocation}>
          <Text style={styles.textPerfil}>{name}</Text>
          <View style={styles.arealocation}>
            <Text style={styles.txtlocation}>
              <Ionicons name="location" size={20} color={'#ff6c6c'} />
              {data.location}
            </Text>

            <Text style={styles.txtlocation}>
              <Ionicons name="time" size={20} color={'#ff6c6c'} />
              13 hrs ago
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.textDescricao}>{description}</Text>
      <Image source={{ uri: imagePublish }} style={styles.imgpubli} />
      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="heart-circle" size={20} color={'red'} />
          <Text style={styles.txtComments}>{likers} Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="chatbubble" size={20} color={'gray'} />
          <Text style={styles.txtComments}>{comments} Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
