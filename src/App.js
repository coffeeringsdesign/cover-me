import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import addNewSentenceForm from './components/addNewSentenceForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path='/' component={addNewSentenceForm} />
          </div>
        </Switch>
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
