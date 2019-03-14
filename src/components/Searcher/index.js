import React, { Component } from 'react';

import { View, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Searcher extends Component {
  state = {
    repository: '',
  };

  render() {
    const { repository } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar novo repositório"
          value={repository}
          onChangeText={text => this.setState({ repository: text })}
        />
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon style={styles.icon} name="plus" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}
