import React, {Component} from 'react';

class ToDoItem extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.item}
      </div>
    );
  }
}

export default ToDoItem;