import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
        <Text style={styles.text}>Start Living Your Bucket List!</Text>
        <TextInput
          style={styles.inputStyle}
        />
        <Button
          title="Search"
          onPress={this.handleChange}
        />
        <Text style={styles.textResult}>{this.state.bucketList} {this.state.add}</Text>
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
    paddingBottom: 10
  },
  textResult: {
    paddingTop: 10
  }
};
