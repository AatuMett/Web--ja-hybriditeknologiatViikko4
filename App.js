import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import {DATA} from './Data'
import Row from './components/Row';
import Search from './components/Search';
import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])


  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.firstname.toLowerCase().includes(search.toLowerCase()));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Row person = {item}/>
      )}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    margin: 40,
  },
});
