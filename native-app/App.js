import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from './projectComponents/SearchBar';
import Frame1 from './projectComponents/Frame1';
import OngoingTask from './projectComponents/OngoingTask';
import CategorySection from './projectComponents/CategorySection';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Hello Annoying React Native</Text>
        <Frame1/>
        <SearchBar/>
        <CategorySection/>
        <OngoingTask/>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
