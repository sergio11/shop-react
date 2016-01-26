import React from 'react';
import MainBar from './MainBar';


export default class App extends React.Component {
  render() {
    return (
      <div id="container">
      	<MainBar title='ReactJS Shop'/>
        {this.props.children}
      </div>
    );
  }
}
