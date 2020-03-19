import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, BackHandler } from 'react-native';

class App extends Component {
  constructor() {
    super()
    this.state = { data: '' }
  }

  render() {
    BackHandler.addEventListener('hardwareBackPress',function(){
      alert('Enter the Text')
      return true
    })
    return (
      <View style={styles.container}>
        <View style={styles.appHeader}>
          <Text style={styles.headerText}>BackHandler in React Native</Text>
        </View>
        <View style={styles.mainScreen}>
          <TextInput style={styles.textInput} defaultValue={this.state.data} onChangeText={(d) => this.setState({ data: d })} placeholder="Enter Text" />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CLICK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appHeader: {
    backgroundColor: 'black',
    height: 60,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 21,
    marginTop: '5%',
    fontWeight: 'bold',
    color: 'snow'
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '70%',
    color: 'black',
    margin: '3%',
    fontSize: 20,
  },
  buttonContainer:
  {
    height: 40,
    width: '28%',
    backgroundColor: 'black',
    alignItems: 'center',
    margin: '10%',
  },
  buttonText:
  {
    marginTop: '3%',
    fontSize: 24,
    color: 'snow',
  },
  mainScreen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})