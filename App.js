import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import socketServices from './src/utlis/socketService';


const App = () => {
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);


  // =============socket initialize ===========
  useEffect(()=>{
 socketServices.initializeSocket()
  },[]);



//=========== receive message from node server ==========/
  useEffect(()=>{
socketServices.on('receiveMsg',(msg)=>{
  let cloneArray=[...data];
  setData(cloneArray.concat(msg))
})
  },[data]);


  //========= sending message to node server=====//
const handleMessage=()=>{
  if(message){
    socketServices.emit('sendMsg',message);
    setMessage('')
    return;
  }
  alert("please enter your message")
}


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 0.8}}>
            <TextInput
            value={message}
            onChangeText={(e)=>setMessage(e)}
              placeholder="Enter your message..."
              style={styles.inputField}
            />
          </View>
          <TouchableOpacity
          onPress={handleMessage}
            style={{
              flex: 0.2,
              justifyContent: 'center',
              marginLeft: 10,
              backgroundColor: 'orange',
              borderRadius: 5,
            }}>
            <Text style={{textAlign: 'center', color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Messages here...</Text>
          {data.map((msg,index)=>{
            return<>
              <Text style={{fontWeight:'bold',color:'black',marginBottom:10}} key={index}>{msg}</Text>
            </>
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputField: {
    height: 42,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  btn: {
    flex: 0.2,
  },
});
