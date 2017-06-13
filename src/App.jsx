import React from 'react';
import data from './todos';
//import {TodoApp} from './After.jsx';

window.data = data.todos;
window.id = data.id;

class App extends React.Component {
  render() {
    return (
      <h1>Hello React :)</h1>
    );
  }
}
  
export default App;
