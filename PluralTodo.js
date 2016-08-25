import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from './todoStore';

export default class PluralTodo extends React.Component {
  constructor(props){
    super(props);

    this.state = store.getState();
  }

  onPressStarted(){
    this.nav.push({ name: 'taskform'});
  }

  sceneConfig(){
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  renderScene(route, nav){
    switch(route.name){
      case 'taskform':
        return <TaskForm
          onAdd={this.onAdd.bind(this)}
          onCancel={this.onCancel.bind(this)}
        />;
      default:
        return (
          <TaskList
            onPressStarted={this.onPressStarted.bind(this)}
            todos={this.state.todos}
            onDone={this.onDone.bind(this)}
            />);
    }
  }

  onAdd(task){
    console.log('A new task added', task);
    this.state.todos.push({ task });
    this.setState({ todos: this.state.todos});
    this.nav.pop();
  }

  onCancel(){
    console.log('Cancelled!');
    this.nav.pop();
  }

  onDone(todo){
    const filteredTodos = this.state.todos.filter((filteredTodo) => {
      return filteredTodo !== todo;
    });
    this.setState({ todos: filteredTodos});
  }

  render() {
    return (<Navigator
        initialRoute={{name: 'tasklist', index: 0}}
        ref={((nav) => {this.nav = nav})}
        renderScene={this.renderScene.bind(this)}
        configureScene={this.sceneConfig}
      />);
  }
}

const styles = StyleSheet.create({
});