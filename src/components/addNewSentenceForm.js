import React, { Component } from 'react';
import './../App.scss';

class addNewSentenceForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('yo submit works');
    // const newSentence = {
    //   crossTeamCollaboration: true,
    //   // sentence: enterSentence
    // }
  }

  handleChange(e) {
  console.log(e.target.value);
  this.setState({
    [e.target.name]: e.target.value
  });
}


  render() {
    return (
      <div className="addNewSentenceFormContent">
        <form className="addNewSentenceForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="checkbox" value="problemSolving" id="problemSolving" />
            <label htmlFor="problemSolving">
              Problem Solving
            </label>
          </div>
          <div>
            <input type="checkbox" value="crossTeamCollaboration" id="crossTeamCollaboration" />
            <label htmlFor="crossTeamCollaboration">
              Cross-Team Collaboration
            </label>
          </div>
          <div>
            <label htmlFor="enterSentence">
              Please enter the Sentence:
            </label>
            <textarea  id="enterSentence" onChange={this.handleChange}/>
          </div>
          <button className="button" type="submit">Add Sentence to Database</button>
        </form>
      </div>
    );
  }
}

export default addNewSentenceForm;
