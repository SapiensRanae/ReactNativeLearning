import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View, Image, Pressable} from 'react-native';
import {useState} from "react";


export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");



  const images = [
    {uri: "https://i.imgur.com/HS07FIx.png"},
    {uri: "https://i.imgur.com/xSofQm0.png"},
  ]

  const [imgSource, setImgSource] = useState(0);

  const [pressed, setPressed] = useState(0);

  const calculate = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum.toString());
  };

  return (<>
    <View style={styles.container}>
      <Text>Simple adder</Text>
      <TextInput placeholder={"Input 1st number"} value={num1} onChangeText={num1 => setNum1(num1)} />
      <TextInput placeholder={"Input 2nd number"} value={num2} onChangeText={num2 => setNum2(num2)} />
      <Button title={"calculate"} onPress={calculate} />
      <Text>Result : {result}</Text>
    </View>

          <View style={styles.container}>
              <Text>Image picker</Text>
            <Pressable onPress={() => setImgSource(imgSource === 0 ? 1 : 0)}>
              <Image source={images[imgSource]} style={{width: 200, height: 200, resizeMode: "contain"}}  />
            </Pressable>
            </View>
        <View style={styles.container}>
          <Text>Pressable</Text>
          <Pressable onPress={() => setPressed(pressed + 1)}>
            <Text>Press me : {pressed}</Text>
          </Pressable>
          <Button title={"Reload"} onPress={() => setPressed(0)} />
        </View>
      </>
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
