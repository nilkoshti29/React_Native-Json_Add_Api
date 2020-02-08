
/*
import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
 
export default class App extends Component
{
    constructor()
    {
        super();
 
        this.state = { 
 
          st_name: '', 
          st_gender: '',
          st_email: '',
          st_password:'',

        ActivityIndicator_Loading: false, 
        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.29.130/ecommerce/add-student-api.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                    st_name : this.state.st_name,
 
                    st_gender : this.state.st_gender,
 
                    st_email : this.state.st_email,

                    st_password: this.state.st_password
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
             
              
                alert(responseJsonFromServer['message']);
                this.setState({ ActivityIndicator_Loading : false });
 
            }).catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
 
    render()
    {
        return(
 
            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Enter Student Name"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ st_name: TextInputText })} />
 
                <TextInput 
                  placeholder = "Enter Student Gender"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ st_gender: TextInputText })} />
 
                <TextInput  
                  placeholder = "Enter Student Email" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ st_email: TextInputText })} />
                
                
                <TextInput  
                  placeholder = "Enter Student Password" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ st_password: TextInputText })} />
              
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>
 
                    <Text style = { styles.TextStyle }>Add</Text>
 
                </TouchableOpacity>
                {
        
                     this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
        
                }
               
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
 
    },
 
    TextInputStyleClass:
    {
 
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
 
    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});

*/

import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
 
export default class App extends Component
{
    constructor()
    {
        super();
 
        this.state = { 
 
          user_name: '', 
          user_gender: '',
          user_email: '',
          user_password:'',
          user_address:'',

        ActivityIndicator_Loading: false, 
        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.29.130:3000/user/add-user-api',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  user_name : this.state.user_name,
 
                  user_gender : this.state.user_gender,
 
                  user_email : this.state.user_email,

                  user_password: this.state.user_password,

                  user_address:this.state.user_address,
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
             
              
                alert(responseJsonFromServer['message']);
                this.setState({ ActivityIndicator_Loading : false });
 
            }).catch((error) =>
            {
                console.error(error);
 
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
 
    render()
    {
        return(
 
            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Enter User Name"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ user_name: TextInputText })} />
 
                <TextInput 
                  placeholder = "Enter User Gender"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ user_gender: TextInputText })} />
 
                <TextInput  
                  placeholder = "Enter User Email" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ user_email: TextInputText })} />
                
                
                <TextInput  
                  placeholder = "Enter User Password" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ user_password: TextInputText })} />

                <TextInput  
                  placeholder = "Enter User Address" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ user_address: TextInputText })} />  
              
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>
 
                    <Text style = { styles.TextStyle }>Add</Text>
 
                </TouchableOpacity>
                {
        
                     this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
        
                }
               
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
 
    },
 
    TextInputStyleClass:
    {
 
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
 
    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});


