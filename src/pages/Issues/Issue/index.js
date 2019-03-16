import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Issue = ({ issue }) => (
  <TouchableOpacity
    onPress={() => {
      Linking.openURL(issue.html_url);
    }}
  >
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
        <View style={styles.textInfo}>
          <Text style={styles.title} numberOfLines={1}>
            {issue.title}
          </Text>
          <Text style={styles.user}>{issue.user.login}</Text>
        </View>
      </View>
      <Icon style={styles.icon} name="angle-right" size={16} />
    </View>
  </TouchableOpacity>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
  }).isRequired,
};

export default Issue;
