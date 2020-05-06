import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      originalColor: 'none',
      newColor: 'fifteen'
    }
  }

  updateCount() {
    this.setState(prevState => ({
        count: prevState.count + 1
    }));
    if (this.state.count > 13){
      this.setState(prevState => ({
        originalColor: 'fifteen'
      }));
    }
  }
  render() {
    return (
      <div className={this.state.originalColor}>
          <h1>{this.state.count}</h1>
          <p>{this.state.originalColor}</p>
          <button
              onClick={()=> this.updateCount()} > +
          </button>
      </div>
    )
  }
}

export default App;
