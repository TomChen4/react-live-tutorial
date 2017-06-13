import React from 'react';
import { render } from 'react-dom';


class Title extends React.Component{
    render(){
        return (
            <div>
                <div>
                  <h1>Todos: {this.props.todoCount}</h1>
                </div>
            </div>
        );
    }
}

class TodoForm extends React.Component{
    submit(e){
        e.preventDefault();
        this.props.addTodo(this.input.value);
        this.input.value = '';
    }
    render(){
        this.input = '';
        return (<form onSubmit={::this.submit}>
            <input className="form-cntrol col-md-12" ref={node => {this.input = node}}/>
            <br />
        </form>);
    }
}

// Single Todo Row
class Todo extends React.Component{
    render(){
        return (<a href="#" className="list-group-item" onClick={() => {this.props.removeTodo(this.props.todo.id)}}>{this.props.todo.text}</a>);
    }
}

class TodoList extends React.Component{
    render(){
        // Map through the todos
        const todoNode = this.props.todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} removeTodo={this.props.removeTodo}/>)
        });
        return (<div className="list-group">{todoNode}</div>);
    }
}

export class TodoApp extends React.Component{
    constructor(){
        super();    
        this.state = {
            todos: [
                {id:1, text:"First TODO"},
                {id:2, text:"Second TODO"},
                {id:3, text:"Third TODO"}],
            id: 3
        };
    }
    removeTodo(id){
        const newTodos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({...this.state, todos: newTodos})
    }
    addTodo(text){
        const newId = ++this.state.id;
        const newTodos = [...this.state.todos, {id: newId, text}]
        this.setState({id: newId, todos: newTodos});
    }
    render(){
        return (
        <div>  
            <Title todoCount={this.state.todos.length}/>
            <TodoForm addTodo={::this.addTodo}/>
            <TodoList todos={this.state.todos} removeTodo={::this.removeTodo}/>
        </div>
        );
    }
}