import React from "react";
import styles from "./style.css";
import Catalog from '../../common/components/Catalog';
import ActionsCreator from '../../actions_creator';

export default class HomePage extends React.Component {

	componentDidMount(){
		ActionsCreator.loadMeals();
	}

	render() {
	    return (
	      <div className={styles.content}>
	        <h1>Home Page</h1>
	        <Catalog />
	      </div>
	    );
	}
}
