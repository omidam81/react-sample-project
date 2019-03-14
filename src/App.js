import React, { Component } from 'react';
import {Main, Header, Footer, FooterBottom} from './partials';

class App extends Component{
  constructor(props) {
      super(props);

      const { dispatch } = this.props;
  }

  render(){
    return <div>
      <Header />
      <Main />
      <Footer />
      <FooterBottom/>
    </div>
  }
}


export default App;
