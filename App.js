import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from '@rneui/themed';
import { AppColors } from './src/theme/appColors';
import { useState } from 'react';
import { themeSelection } from './src/theme/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const [theme, setTheme] = useState(themeSelection(AppColors));
  return (
    <ThemeProvider theme={theme} >
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

export default App;
