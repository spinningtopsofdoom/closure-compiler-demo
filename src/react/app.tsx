import * as React from 'react';
import * as ReactDOM from 'react-dom';

class TodoApp extends React.Component<{}, {}> {
  public render () {
    return (
      <div>Hi</div>
    );
  }
}

function render() {
  ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
  );
}
