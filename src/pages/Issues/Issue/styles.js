import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
  },

  info: {
    flexDirection: 'row',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  textInfo: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    paddingRight: metrics.basePadding,
  },

  title: {
    fontWeight: 'bold',
    color: colors.darker,
    fontSize: 18,
  },

  user: {
    color: colors.regular,
    fontSize: 14,
  },

  icon: {
    color: colors.regular,
    fontSize: 20,
  },
});

export default styles;
