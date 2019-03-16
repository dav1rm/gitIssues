import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, ActivityIndicator, Text, TouchableOpacity,
} from 'react-native';

import api from '~/services/api';
import styles from './styles';
import Issue from './Issue';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
    headerRight: <View />,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    data: [],
    loading: false,
    refreshing: false,
    error: '',
    state: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  toFilter = async (state = 'all') => {
    await this.setState({ state });

    await this.loadIssues();
  };

  loadIssues = async () => {
    this.setState({ refreshing: true, loading: true });
    const { state } = this.state;
    const { navigation } = this.props;
    const { name, organization } = navigation.getParam('repository');

    try {
      const { data } = await api.get(`/repos/${organization}/${name}/issues?state=${state}`);

      this.setState({
        data,
        refreshing: false,
        loading: false,
        error: '',
      });
    } catch (err) {
      this.setState({ refreshing: false, loading: false, error: 'Falha ao atualizar' });
    }
  };

  renderListItem = ({ item }) => <Issue issue={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading, error, state } = this.state;
    return (
      <View style={styles.container}>
        {!!error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.tabs}>
          <TouchableOpacity style={styles.button} onPress={() => this.toFilter('all')}>
            <Text style={[styles.textButton, state === 'all' ? styles.activedButton : '']}>
              Todas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.toFilter('open')}>
            <Text style={[styles.textButton, state === 'open' ? styles.activedButton : '']}>
              Abertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.toFilter('closed')}>
            <Text style={[styles.textButton, state === 'closed' ? styles.activedButton : '']}>
              Fachadas
            </Text>
          </TouchableOpacity>
        </View>
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
