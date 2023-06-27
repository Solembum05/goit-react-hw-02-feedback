import Feedback  from './Feedback/Feedback.jsx'
import React from 'react'


class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Feedback state={this.state} />
      </div>
    );
  }
}

  export default App