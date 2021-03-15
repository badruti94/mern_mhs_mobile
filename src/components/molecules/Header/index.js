import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={{
            backgroundColor: 'orange',
            height: 30,
            padding: 3,
        }} >
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                textTransform: 'uppercase',
                lineHeight: 30
            }} >ini header</Text>
        </View>
    )
}

export default Header
