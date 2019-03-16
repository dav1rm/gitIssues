import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Repository = ({ navigation, repository }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Issues', { repository })}>
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.avatar} source={{ uri: repository.avatar }} />
        <View style={styles.textInfo}>
          <Text style={styles.name}>{repository.name}</Text>
          <Text style={styles.organization}>{repository.organization}</Text>
        </View>
      </View>
      <Icon style={styles.icon} name="angle-right" size={16} />
    </View>
  </TouchableOpacity>
);

Repository.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  repository: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    organization: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default withNavigation(Repository);
