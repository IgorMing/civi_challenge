import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Navigator from './root-navigator';
import theme from './commons/styled-components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={theme.statusBar?.content}
        backgroundColor={theme.statusBar?.background}
      />
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
