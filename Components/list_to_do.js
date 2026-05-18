import React, { useState } from "react";
import { Text, View } from "react-native";

const ListToDo = ({ tasks = [] }) => {
    const [done, setDone] = useState({});

    return (
        <View>
            {tasks.map((task) => (
                <Text
                    key={task.id}
                    onPress={() =>
                        setDone({ ...done, [task.id]: !done[task.id] })
                    }
                    style={{
                        fontSize: 18,
                        paddingVertical: 8,
                        textDecorationLine: done[task.id] ? "line-through" : "none",
                    }}
                >
                    {task.text}
                </Text>
            ))}
        </View>
    );
};

export default ListToDo;