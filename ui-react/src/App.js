import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import Home from './Home'
import ErrorPage from './ErrorPage'
import Results from './Results'
import Resources from './Resources'
// import Contact from './About'
import About from "./About";
import Donate from "./Donate";
import AdditionalInfo from "./AdditionalInfo";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";



class App extends React.Component{

  componentDidMount(){
  }
  
  render(){
    // localStorage.clear()
    return(
      <BrowserRouter>
        <div  id='page-container' style={{flexDirection: 'column', display: 'flex', minHeight: '100vh'}}>
          <div id='content-container' style={{flex: '1'}}>
            <TopNavBar/>
            <Switch >
              <Route exact path='/' component={Home} />         
              <Route exact path='/en' component={Home} />
              <Route exact path='/en/results' component={Results} />
              <Route exact path='/en/resources' component={Resources} />
              <Route exact path='/en/about' component={About} />
              <Route exact path='/en/donate' component={Donate} />
              <Route exact path='/en/additionalinfo' component={AdditionalInfo} />
              <Route exact path='/en/privacy' component={Privacy} />
              <Route exact path='/en/termsofuse' component={TermsOfUse} />
              <Route exact path='/he' component={Home} />
              <Route exact path='/he/results' component={Results} />
              <Route exact path='/he/resources' component={Resources} />
              <Route exact path='/he/about' component={About} />
              <Route exact path='/he/donate' component={Donate} />
              <Route exact path='/he/additionalinfo' component={AdditionalInfo} />
              <Route exact path='/he/privacy' component={Privacy} />
              <Route exact path='/he/termsofuse' component={TermsOfUse} />
              <Route path='/' component={ErrorPage} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
