import { verifyInstallation } from 'nativewind';
import React from 'react';
import { View } from 'react-native';

import AppNavigationNi from './src/navigations';

const App = () => {

  verifyInstallation();
  
  return (
    <View className="flex-1">
      <AppNavigationNi />
    </View>
  );
};

export default App;
