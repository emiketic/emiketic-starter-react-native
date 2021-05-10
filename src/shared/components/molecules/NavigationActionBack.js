import React from 'react';
import PropTypes from 'prop-types';
import { TopNavigationAction } from '@ui-kitten/components';
import IconBack from '../atoms/IconBack';

function NavigationActionBack({ onNavigateBack }) {
  return <TopNavigationAction icon={IconBack} onPress={onNavigateBack} />;
}

NavigationActionBack.propTypes = {
  onNavigateBack: PropTypes.func,
};

NavigationActionBack.defaultProps = {
  onNavigateBack: () => {},
};

export default NavigationActionBack;
