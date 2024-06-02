import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import SearchBar from './projectComponents/SearchBar';
import Frame1 from './projectComponents/Frame1';
import OngoingTask from './projectComponents/OngoingTask';
import CategorySection from './projectComponents/CategorySection';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Frame1/>
          <SearchBar/>
          <CategorySection/>
          <OngoingTask/>
        </View>
      </ScrollView>
    </SafeAreaView>
    
    
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
