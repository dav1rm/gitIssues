import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, ActivityIndicator, Text,
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
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true, loading: true });
    const { navigation } = this.props;
    const { id } = navigation.getParam('repository');

    try {
      const { data } = await api.get(`/repositories/${id}/issues`);

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
    const { loading, error } = this.state;
    return (
      <View style={styles.container}>
        {!!error && <Text style={styles.error}>{error}</Text>}
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
