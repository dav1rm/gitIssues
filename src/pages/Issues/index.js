import React, { Component } from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import api from '~/services/api';
import styles from './styles';
import Issue from './Issue';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
    headerRight: <View />,
  });

  state = {
    data: [],
    loading: false,
    refreshing: false,
    search: '',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const { navigation } = this.props;
    const { id } = navigation.getParam('repository');
    this.setState({ refreshing: true, loading: true });

    const { data } = await api.get(`/repositories/${id}/issues`);

    this.setState({
      loading: false,
      data,
    });

    this.setState({ refreshing: false, loading: false });
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
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const { loading, search } = this.state;
    return (
      <View style={styles.container}>
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
