import React from 'react';
import MainBar from './MainBar';
import {rosetta} from '@schibstedspain/rosetta';
import i18n from '../../i18n';

@rosetta(i18n)
export default class App extends React.Component {

	constructor(){
    	super();
    	this.i18n = this.getChildContext().i18n;
  	}

  	render() {
	    return (
	      <div id="container">
	      	<MainBar title={this.i18n.t('title')}/>
	        {this.props.children}
	      </div>
	    );
	}
}
