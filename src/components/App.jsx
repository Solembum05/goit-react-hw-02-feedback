import Feedback  from './Feedback/Feedback.jsx'
import React from 'react'


class App extends React.Component {


  render() {
    return (
      <div>
        <Feedback state={this.state} />
      </div>
    );
  }
}

  export default App