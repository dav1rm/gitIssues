import React, { Component } from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import styles from './styles';
import Repository from './Repository';

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    data: [
      {
        id: 1,
        name: 'react',
        organization: 'facebook',
        avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      },
      {
        id: 2,
        name: 'react',
        organization: 'facebook',
        avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      },
      {
        id: 3,
        name: 'react',
        organization: 'facebook',
        avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      },
      {
        id: 4,
        name: 'react',
        organization: 'facebook',
        avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      },
    ],
    loading: false,
    refreshing: false,
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
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
