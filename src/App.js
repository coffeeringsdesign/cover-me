import React, { Component } from 'react';
import './App.scss';
import addNewSentenceForm from './components/addNewSentenceForm';
import sentenceList from './components/sentenceList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
  
          <div className="App">
            <Route exact path='/' component={addNewSentenceForm} />
            <Route path='/sentences' component={sentenceList}  />
          </div>

      </Router>
    );
  }
}



export default App;


// <Router>
//           <Switch>
//             <Route exact path='/' component={EntranceButton} />
//             <div className="searchAndReturnContainer">
//               <Route path='/BathroomList' component={BathroomList} />
//               <Route path='/addBathroom'  render={(props)=><AddBathroomForm dispatch={this.props.dispatch}/>} />
//             </div>
//           </Switch>
//         </Router>
