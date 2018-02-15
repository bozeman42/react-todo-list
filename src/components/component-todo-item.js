import React, {Component} from 'react';

class ToDoItem extends Component {
  render() {
    const {text, complete} = this.props.item;
    console.log(this.props);

    return (
      <li>
        {complete?'(X)':'( )'} {text}
      </li>
    );
  }
}

export default ToDoItem;