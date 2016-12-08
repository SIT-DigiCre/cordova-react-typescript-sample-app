import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Test extends React.Component<{},{}>{
  render(){
    return (
      <div>
        <h1>Hello,World!</h1>
      </div>
    )
  }
}
ReactDOM.render(<Test/>,document.getElementById('app'));