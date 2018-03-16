import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'a1', name: 'Ciclano'},
      {id: 'a2', name: 'Beltrano'},
      {id: 'a3', name: 'Fulano'}
    ],
    showPersons: false
  }

  switchHandler = name => {
    this.setState({
      persons: [
        {name: name}
      ] 
    })
  }

  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  toggleHandler = () => {
    const isActive = this.state.showPersons;
    this.setState({
      showPersons: !isActive
    })
  }

  deleteHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid darkBlue',
      padding: '8px',
      borderRadius: '10px',
      cursor: 'pointer',
      marginBottom: '8px',
      color: 'white'
    }
    
    let persons = null; 
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person key={person.id}
            name={person.name}
            click={this.deleteHandler.bind(this, index)}
            changed={(event) => this.changeHandler(event, person.id)}>
              Content here!
            </Person>
          })}
        </div>        
      )
      style.backgroundColor = 'red';
      style.border = '1px solid darkRed';
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <p className={classes.join(' ')}>Testing style classes</p>
          <button style={style} onClick={this.toggleHandler}>Switch Name</button>
        </p>
        {persons}
      </div>
    );
  }
}

export default App;
