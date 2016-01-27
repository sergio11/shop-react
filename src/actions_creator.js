import ActionTypes from './action_types';
import Dispatcher from './dispatcher';
import CatalogService from './services/catalog_service';

/*
 * @class Actions
 */
class ActionsCreator {

  /*
   * @constructs Actions
   * @param {Object} dispatcher
   */
  constructor (Dispatcher) {
    this.dispatcher = Dispatcher;
  }

  /*
   * @method loadMeals
   */
  loadMeals() {
    CatalogService.loadMeals().then((meals) => {
    	this.dispatcher.dispatch({
    		type: ActionTypes.LOAD_MEALS_SUCCESS,
    		meals: meals
    	});
    }).catch((err) => {
      console.log("Error"),
      console.log(err);
    });
  }


}

export default new ActionsCreator(Dispatcher);