import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { ListPage } from './src/pages/ListPage';
import { NativeRouter, Route, Routes } from 'react-router-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NativeRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
        </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
