import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { WebView} from 'react-native-webview';

const { longnitute, latitute } = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longnitute}latitude=${latitute}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

export default class StarMapScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitute: "",
            longnitute: "",
        }
    }
    render() {
        return (
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
            placeholder='Enter Your Latitute'
            placeholderTextColor= "#ffff#000000"
            onChangeText={(text)=>{
                this.setState({
                    latitute: text
                })
            }}
            />
             <TextInput 
                 style={{height: 40, borderColor: 'gray', borderWidth: 1,}}
                  placeholder='Enter Your Latitute'
                  placeholderTextColor= "#ffff#000000"
                   onChangeText={(text)=>{
                       this.setState({
                        latitute: text
                       })
                   }}
                   />
        )
    }
}
