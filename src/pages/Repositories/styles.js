import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    height: Platform.OS === 'ios' ? 54 + getStatusBarHeight() : 54,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
    paddingVertical: metrics.basePadding,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },

  input: {
    flex: 1,
    height: 44,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 0.5,
    borderColor: colors.light,
  },

  button: {
    padding: metrics.basePadding / 2,
  },

  icon: {
    color: colors.darker,
  },

  error: {
    color: colors.danger,
    marginHorizontal: metrics.baseMargin * 2,
    paddingTop: metrics.basePadding,
  },
});

export default styles;
