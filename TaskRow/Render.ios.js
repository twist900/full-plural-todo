import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const localStyles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  row: {
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
  }
})
import Swipeout from 'react-native-swipeout';

export default function render(baseStyles){
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: () => this.props.onDone(this.props.todo)
    }
  ];

  return (
    <View style={localStyles.container}>
      <Swipeout
        backgroundColor="#fff"
        right={buttons}
      >
        <View style={[baseStyles.container, localStyles.row]}>
          <Text style={baseStyles.label}>ios: {this.props.todo.task}</Text>
        </View>
      </Swipeout>
    </View>

    );
}