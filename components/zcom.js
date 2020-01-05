import {
    View,
    Button,
    TextInput
} from 'react-native';
import React, {
    useState
} from 'react';

const Compute=(props)=>{
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);

    handleC1=(change)=>{
        setOne(change);
    }

    handleC2=(change)=>{
        setTwo(change);
    }

    sendData=()=>{
        props.sendData(one,two);
    }

    return ( <View>
    <TextInput onChangeText={handleC1}/ >
    <TextInput onChangeText={handleC2}/ >
        <Button onPress={sendData} title="Press Me"/>
    </View>
    );
}

export default Compute;