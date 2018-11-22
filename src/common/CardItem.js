import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    );
};
const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardItem };
