import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

// const TodoList = ({ todos, receiveTodo, removeTodo}) => (
//   <div>
//     <ul>
//       {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}
//       removeTodo={removeTodo} receiveTodo={receiveTodo}/>)}
//     </ul>
//     <br />
//     <TodoForm receiveTodo={receiveTodo}/>
//   </div>
// );

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}
          removeTodo={removeTodo} receiveTodo={receiveTodo}/>)}
        </ul>
        <br />
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
