import React from 'react';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>
          Storybook Visual Testing Environment
        </Text>
        <Text style={this.styles.content}>
          Storybook React Native environment used to visually test and validate
          components and design systems. Components are rendered within the
          application container for a realistic visual testing experience
          including theming
        </Text>
        <Text style={this.styles.content}>
          This environment can be disabled through the environment variable
          APP_ENV in .env or .env.environmentName
        </Text>
      </View>
    );
  }
}
