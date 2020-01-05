import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import Compute from './components/zcom.js';

export default function App() {
const[result,setResult]=useState(0)
const[say,setSay]=useState("ZioN!")

sendData=(one,two)=>{
  let res=parseInt(one,10)+parseInt(two,10);
  setSay(one+ " + "+two+" = "+res);
  setResult(res);
}

  return (
    <View style={styles.container}>
      <Text>{say}</Text>
      <Compute sendData={sendData}/>
      <Text>{result}</Text>
    </View>
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
