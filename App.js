import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
=======
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
>>>>>>> c1a1177ebf6dd5277a399d9d319f76938414e884

export default class App extends React.Component {
  state = {
    bucketList: 'This is an example of mobile bucket list app',
    add: 0
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState( prevState => {
      return {
        ...prevState,
        add: prevState.add + 1
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTtYAelbpL7C6FLX_a4lWkuOZI90hUeZDpSjAmbmWMTVgC5hi"}} style={{width: '100%', height: '100%'}}>
          <Text style={styles.text}>Start Living Your Bucket List!</Text>
          <TextInput
            style={styles.inputStyle}
          />
          <Button
            title="Search"
            onPress={this.handleChange}
          />
          <Text style={styles.textResult}>{this.state.bucketList} {this.state.add}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    borderColor: 'green',
    height: 40,
    borderWidth: 1,
    width: '90%',
    marginBottom: 10,
    padding: 'auto 10px'
  },
  text: {
<<<<<<< HEAD
    paddingTop: 10,
    color: 'white'
=======
    paddingBottom: 10
>>>>>>> c1a1177ebf6dd5277a399d9d319f76938414e884
  },
  textResult: {
    paddingTop: 10
  }
};
