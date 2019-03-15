import React, { Component } from 'react';

import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';
import styles from './styles';
import Repository from './Repository';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    data: [],
    loading: false,
    refreshing: false,
    search: '',
  };

  componentDidMount() {
    this.loadRepositories();
  }

  handleTextInput = (text) => {
    this.setState({ search: text });
  };

  saveRepository = async (data) => {
    await AsyncStorage.setItem('@GitIssues:repositories', JSON.stringify(data));
  };

  readRepositories = async () => {
    const data = await AsyncStorage.getItem('@GitIssues:repositories');

    if (data) {
      this.setState({ data: JSON.parse(data) });
    }
  };

  addRepository = async () => {
    this.setState({ loading: true });

    const { search } = this.state;

    const {
      data: {
        id,
        name,
        owner: { login, avatar_url },
      },
    } = await api.get(`/repos/${search}`);

    const repo = {
      id,
      name,
      organization: login,
      avatar: avatar_url,
    };
    console.tron.log(repo);

    console.tron.log(this.state);

    this.setState({
      loading: false,
      search: '',
      data: [repo, ...this.state.data],
    });
    console.tron.log(this.state);
    this.saveRepository(this.state.data);
  };

  loadRepositories = async () => {
    this.setState({ refreshing: true, loading: true });

    await this.readRepositories();

    this.setState({ refreshing: false, loading: false });
  };

  renderListItem = ({ item }) => <Repository repository={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading, search } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar novo repositório"
            value={search}
            onChangeText={this.handleTextInput}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
            <Icon style={styles.icon} name="plus" size={20} />
          </TouchableOpacity>
        </View>
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
