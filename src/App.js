import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addName = this.addName.bind(this);
    this.listNames = this.listNames.bind(this);
    this.state = {
      names: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{color: 'red'}}>
          Type a name here
        </header>
        <div>
          <input id="name" type="text" style={{margin: '2%'}}></input>
          <button type="submit" onClick={this.addName}>Add</button>
        </div>
        <br />
        <h3 style={{color: 'blue'}}>List of names</h3>
        <ul>
          {this.listNames()}
        </ul>
      </div>
    );
  }

  addName() {
    let names = this.state.names;
    let name = document.getElementById('name').value;
    names.push(name);
    this.setState({
      names
    });
    document.getElementById('name').value = '';
  }

  listNames() {
    return this.state.names.map((name, i) => {
      return <h4 key={i}>{name}</h4>
    })
  }
}

export default App;
