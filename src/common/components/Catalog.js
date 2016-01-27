import React from 'react';
import _ from 'mori';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';
import { connectToStores } from '../../hoc/connectToStores';
import CatalogStore from '../../stores/catalog';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    margin:' 1rem auto',
    height: 900,
    overflowY: 'auto'
  },
};


@connectToStores
class Catalog extends React.Component {

	static getStores() {
        return [CatalogStore];
    }

    static getState() {
        return CatalogStore.getState();
    }



	constructor(props){
		super(props);
	}

	renderEmptyAlert(){
		return <p>Ningún resultado encontrado</p>;
	}

	renderTiles(){
		return _.intoArray(_.map((tile) => {
			return <GridTile
	          key={_.get(tile,'id')}
	          title={_.get(tile,'title')}
	          subtitle={_.get(tile,'description')}
	          actionIcon={<IconButton></IconButton>}>
	          <img src={_.get(tile,'img')} />
	        </GridTile>;
		},this.props.state));
	}

	render(){
		return(
			<div style={styles.root}>
			    <GridList cellHeight={200} style={styles.gridList}>
			      { _.count(this.props.state) ? this.renderTiles() : this.renderEmptyAlert()}
			    </GridList>
		    </div>
		);
	}

}

export default Catalog;