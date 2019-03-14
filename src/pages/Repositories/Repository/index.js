import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Repository = ({ repository }) => (
  <TouchableOpacity onPress={() => {}}>
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
  repository: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
  }).isRequired,
};

export default Repository;
