import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Option from './classes/Option';
import Question from './classes/Question';

class App extends Component {
  constructor(props) {
    super(props);
    let q1 = new Question(1, '1+1=?');
    let q2 = new Question(2, '2*2=?');
    this.state = {
      'questions': [q1, q2]
    }
  }
  render() {
    let questions = this.state.questions.map((question) => {
      return (
        <li key={question.id}>
          {question.name}
        </li>
      );
    })
    return (
      <Router>
        <div>
          <Route path='/new-question' exact strict render={
            () => {
              return (<h1>New Question</h1>);
            }
          } />
          <Route path='/questions' exact strict render={
            () => {
              return (<ul>{questions}</ul>);
            }
          } />
        </div>
      </Router>
    );
  }
}

export default App;
