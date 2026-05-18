import React from 'react';
import { Text, StyleSheet } from 'react-native';



const Header = ({ title, color  }) => {
    return (
        <Text style={[styles.title, { color }]}>
            {title}
        </Text>
    );
};



const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 8,
    },
});

export default Header;