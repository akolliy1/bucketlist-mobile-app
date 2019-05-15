import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

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
    paddingTop: 10,
    color: 'white'
  },
  textResult: {
    paddingTop: 10
  }
};
