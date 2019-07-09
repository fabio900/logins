import React, { Component } from 'react'
import {
    StyleSheet,
    View ,
    Button
} from 'react-native'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Navigation } from 'react-native-navigation';

export class AuthScreen extends Component {

gotoScreen = (screenName) => {
    Navigation.push(this.props.componentId,{
        component: {
            name: screenName

        }

    })
}
    render() {
        return (
            <View style = {styles.container}>
               
                <Button title='sign up' onPress={()=>this.gotoScreen('SignUp')}/>
                <Button title='sign in' onPress={()=>this.gotoScreen('SignIn')}/>

            </View>
        )
    }
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
    }
});
