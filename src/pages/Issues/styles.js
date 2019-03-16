import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

  error: {
    color: colors.danger,
    marginHorizontal: metrics.baseMargin * 2,
    paddingTop: metrics.basePadding,
  },
});

export default styles;
