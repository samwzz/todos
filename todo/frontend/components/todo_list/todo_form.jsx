import React from 'react';
import {uniqueId} from "../../util/util";
import {merge} from 'lodash';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.submit = this.submit.bind(this);
  }

  linkState(key) {
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  submit(e) {
    e.preventDefault();
    const todo = merge({}, this.state, { id: uniqueId()});
    this.props.receiveTodo(todo);
    this.setState({title: "", body: "", done: false});
  }

  render () {
    return (
      <form>
        <span>Title: </span>
        <input onChange={this.linkState('title')} value={this.state.title}></input>
        <br />
        <span>Body: </span>
        <textarea onChange={this.linkState('body')} value={this.state.body}></textarea>
        <br />
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }
}

export default TodoForm;