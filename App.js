import {View, StyleSheet, Button} from "react-native";
import Header from "./Components/Header";
import ListToDo from "./Components/list_to_do";
import {useState} from "react";



export default function App() {
    const [isDark, SetDark] = useState(false);
    const tasks = [
        { id: '1', text: 'Buy groceries' },
        { id: '2', text: 'Walk the dog' },
        { id: '3', text: 'Finish homework' },
    ];



    return (
            <View style={[styles.container,{backgroundColor: isDark ? '#5c5c5c' : '#fff'  }]}>
                <Header title="Hello World!" color="#ff0000" />
                <ListToDo tasks={tasks} />
                <Button title="Change Theme" onPress={() => SetDark(!isDark)} />
            </View>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
});
