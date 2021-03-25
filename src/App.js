/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Form, Header, List } from './components/molecules'
import styles from './app-style'
import axios from 'axios';


const App = () => {
  const [isTambah, setIsTambah] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState('')
  const [mhss, setMhss] = useState([])

  const getData = async () => {
    const data = await axios.get('https://mern-mhs-api-badruti94.vercel.app/mhs')
    //console.log(data);
    setMhss(data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View >
      <Header />
      <SafeAreaView style={styles.mainApp} >
        <Button style={styles.btnTambah} onPress={() => { setIsTambah(true) }} title="tambah data" />
        {
          isTambah ?
            <Form
            getData={getData}
            setIsTambah={setIsTambah}
            setIsUpdate={setIsUpdate}
            id={id}
            update={isUpdate}
            /> : null
        }
        <List
        getData={getData}
        mhss={mhss}
        setIsTambah={setIsTambah}
        setIsUpdate={setIsUpdate}
        setId={setId}
         />
      </SafeAreaView>
    </View>
  );
};



export default App;
