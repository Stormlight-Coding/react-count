import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  updateCount() {
    this.setState(prevState => ({
        count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button
              onClick={()=> this.updateCount()} > +
          </button>
      </div>
    )
  }
}

export default App;
