import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        // eslint-disable-next-line react/jsx-props-no-spreading
        header: () => <Header {...navigation} />,
      }),
      navigationOptions: {
        cardStyle: {
          backgroundColor: colors.dark,
        },
      },
    }
  )
);

Routes.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  navigation: PropTypes.shape(),
};

export default Routes;
