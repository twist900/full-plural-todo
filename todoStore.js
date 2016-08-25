import { createStore } from 'redux';

const defaultState = {
  todos: [
    { task: 'Create initial todo' }
  ]
}

function todoStore(state = defaultState, action){
  switch(action.type){
    case 'ADD_TODO':
      return Object.assign({}, state, state.todos.concat([{
        task: action.task
      }]));
    default:
      return state;
  }
}

export default createStore(todoStore);