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

  error: {
    color: colors.danger,
    marginHorizontal: metrics.baseMargin * 2,
    paddingTop: metrics.basePadding,
  },

  tabs: {
    height: 42,
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
  },

  button: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  textButton: {
    textAlign: 'center',
    color: colors.dark,
  },

  activedButton: {
    fontWeight: 'bold',
    color: colors.dark,
  },
});

export default styles;
