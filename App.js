import React from 'react';
import { ScrollView } from 'react-native';
import AllMovies from './components/AllMovies'; // Importing AllMovies component

// App component
function App() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <AllMovies />
    </ScrollView>
  );
}

export default App;
