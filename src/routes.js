import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colors } from './styles';
import Issues from '~/pages/Issues';
import Repositories from '~/pages/Repositories';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Repositories,
      Issues,
    },
    {
      initialRouteName: 'Repositories',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.white,
          elevation: 0,
        },
        headerTitleStyle: {
          color: colors.darker,
          fontWeight: 'bold',
          flex: 1,
          alignSelf: 'center',
          textAlign: 'center',
        },
      },
    },
  ),
);

export default Routes;
