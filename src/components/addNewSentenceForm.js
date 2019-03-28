import React, { Component } from 'react';
import './../App.scss';

class addNewSentenceForm extends Component {
  render() {
    return (
      <div className="addNewSentenceFormContent">
        <form className="addNewSentenceForm" onSubmit={this.handleSubmit}>
          <div>
            <input type="checkbox" value="problemSolving" id="problemSolving" />
            <label for="problemSolving">
              Problem Solving
            </label>
          </div>
          <div>
            <input type="checkbox" value="crossTeamCollaboration" id="crossTeamCollaboration" />
            <label for="crossTeamCollaboration">
              Cross-Team Collaboration
            </label>
          </div>
          <div>
            <label for="enterParagraph">
              Please enter the Paragraph:
            </label>
            <textarea value="enterParagraph" id="enterParagraph" />
          </div>
          <button className="button" type="submit">Add Sentence to Database</button>
        </form>
      </div>
    );
  }
}

export default addNewSentenceForm;
