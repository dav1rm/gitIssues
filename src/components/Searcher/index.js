import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Searcher extends Component {
  state = {};

  render() {
    const { search, handleTextInput, handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar novo repositório"
          value={search}
          onChangeText={handleTextInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Icon style={styles.icon} name="plus" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}
