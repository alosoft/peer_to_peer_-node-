import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../action';
import Landing from './Landing';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
// const Landing = () => <h2>Landing</h2>;

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
    // fetchUser();
    // fetch('/api/current_user')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(console.log)
  }



  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/surveys' component={Dashboard}/>
            <Route path='surveys/new' component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);