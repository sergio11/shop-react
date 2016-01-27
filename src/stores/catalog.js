import { Store } from 'flux/utils';
import ActionTypes from '../action_types';
import Dispatcher from '../dispatcher';
import atom from '../atom';
import _ from 'mori';

class CatalogStore extends Store {

	//Rutas para el átomo.
	static atom_paths = {
		meals: ['data', 'meals']
	};

	constructor(Dispatcher) {
		super(Dispatcher);
	}

	__onDispatch(action){
		switch(action.type){
			case ActionTypes.LOAD_MEALS_SUCCESS:
				atom.assocIn(CatalogStore.atom_paths.meals,_.toClj(action.meals));
				this.__emitChange();
			break;
		}
	}

	getState(){
		return atom.getIn(CatalogStore.atom_paths.meals);
	}

}

export default new CatalogStore(Dispatcher);