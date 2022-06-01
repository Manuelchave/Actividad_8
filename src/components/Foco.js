import React, {useState} from "react"
import { View, Text, Image, TouchableOpacity } from "react-native";

const Foco = () => {
    const[estatus, setEstatus] = useState(false);
    return(
        <View>
        <TouchableOpacity onPress={()=> setEstatus(!estatus)}>
        <Image source={
            estatus ? require('../../img/focoOn.png')
                    : require('../../img/focoOff.png')}
            style={{width: 100, height: 100}}
            />
        
        </TouchableOpacity>
        </View>
    )
    }
    
    export default Foco