import { Store } from 'flux/utils';
import ActionTypes from '../action_types';
import Dispatcher from '../dispatcher';
import atom from 'atom';

class CatalogStore extends Store {

	//Rutas para el átomo.
	static atom_paths = {
		products: ['data', 'catalog']
	}

	constructor(Dispatcher) {
		super(Dispatcher);
	}

	__onDispatch(action) {}

}

export default new CatalogStore(Dispatcher);